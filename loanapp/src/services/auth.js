import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword, updatePassword } from "firebase/auth";


export const doCreateUserWithEmailAndPassword = async (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password)
}

export const doSignInWithEmailAndPassword = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password)
}

export const doSignOut = () => {
    return auth.signOut();
}

export const doPasswordChange = (password) => {
    return updatePassword(auth.currentUser,password)
}