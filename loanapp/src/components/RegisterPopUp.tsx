import React, { useState } from 'react';
import { doCreateUserWithEmailAndPassword } from '../services/auth';

const RegisterPopUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e:any) => {
    e.preventDefault();

    
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }

  
    setError('');
    setIsRegistering(true);

    try {
      await doCreateUserWithEmailAndPassword(email, password);
      console.log('Registration successful!');
    } catch (error) {
      setError('Failed to register. Please try again later.');
      console.error('Registration error:', error);
    } finally {
      setIsRegistering(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-9mr vis-bi7">
          <h2 className="mb-8 text-3xl font-bold text-dark max-w-3xl md:text-5xl">Register</h2>
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
          <div className="max-w-md">
            <label htmlFor="confirmPassword" className="text-sm mx-3 md:text-lg my-1 block font-medium text-gray-600">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              className="bg-gray-100 w-full rounded-full text-sm md:text-lg px-4 p-3"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <span className="error-lvg"></span>
          </div>
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <button className="bg-primary text-white rounded-full w-full py-3 mt-4" type="submit" disabled={isRegistering}>
            {isRegistering ? 'Registering...' : 'Register'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPopUp;
