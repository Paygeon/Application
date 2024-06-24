import React, { useEffect, useState, ChangeEvent } from 'react';
import { auth, db, storage } from '../firebaseConfig';
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { User as FirebaseUser } from "firebase/auth"; // Rename to avoid conflict with local User interface

interface User {
  uid: string;
}

const CMS: React.FC = () => {
  const [image, setImage] = useState<File | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [url, setUrl] = useState<string>('');
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = auth.currentUser as FirebaseUser | null;
      if (currentUser) {
        setUser({ uid: currentUser.uid });
        const userDoc = await getDoc(doc(collection(db, 'Users'), currentUser.uid, 'header_image', 'header'));
        if (userDoc.exists()) {
          setUrl(userDoc.data()?.image);
        }
      }
    };

    fetchUser();
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleUpload = () => {
    if (!user || !image) return;

    const storageRef = ref(storage, `images/${user.uid}/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on('state_changed', 
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgress(progress);
      },
      (error) => {
        console.error('Error uploading image:', error);
      },
      async () => {
        const url = await getDownloadURL(uploadTask.snapshot.ref);
        setUrl(url);
        await setDoc(doc(collection(db, 'Users'), user.uid, 'header_image', 'header'), {
          image: url,
          uploadedAt: new Date()
        });
      }
    );
  };

  return (
    <div>
      <h1>CMS Dashboard</h1>
      <h2>Upload Header Image</h2>
      <progress value={progress} max="100" />
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
      <br />
      {url && <img src={url} alt="Uploaded Header" style={{ width: '300px' }} />}
    </div>
  );
};

export default CMS;
