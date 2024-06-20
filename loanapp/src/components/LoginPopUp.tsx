import React, { useState } from 'react';
import { doSignInWithEmailAndPassword } from '../services/auth';

const LoginPopUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = async (e:any) => {
    e.preventDefault(); 
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        await doSignInWithEmailAndPassword(email, password);
        console.log('Login successful!');
       
      } catch (error) {
        setError('Failed to sign in. Please check your email and password.');
        console.error('Login error:', error);
      } finally {
        setIsSigningIn(false);
      }
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-9mr vis-bi7">
          <h2 className="mb-8 text-3xl font-bold text-dark max-w-3xl md:text-5xl">Login</h2>
          <div className="max-w-md">
            <label htmlFor="email" className="text-sm mx-3 md:text-lg my-1 block font-medium text-gray-600">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="bg-gray-100 w-full rounded-full text-sm md:text-lg px-4 p-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span className="error-lvg"></span>
          </div>
          <div className="max-w-md">
            <label htmlFor="password" className="text-sm mx-3 md:text-lg my-1 block font-medium text-gray-600">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="bg-gray-100 w-full rounded-full text-sm md:text-lg px-4 p-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span className="error-lvg"></span>
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <button className="bg-primary text-white rounded-full w-full py-3 mt-4" type="submit" disabled={isSigningIn}>
            {isSigningIn ? 'Signing in...' : 'Login'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPopUp;
