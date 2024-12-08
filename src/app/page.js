'use client';

import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import './styles/home.css';

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/sign_in`,
        {
          user: {
            email,
            password,
          }
        },
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );

      localStorage.setItem('token', response.data.token);
      router.push('/dashboard');
    } catch (err) {
      setError(err);
      debugger
      console.error('Login failed:', err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-background bg-white p-4">
      <div className="w-full max-w-md bg-white rounded-lg custom-shadow-lg p-8 shadow-t-lg">
        <h1 className="text-2xl font-semibold text-black text-center mb-6">Login</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-black">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Login
          </button>
        </form>
        <br></br>
        <div>
          <p>Don't have an account already? <a href='/signup'>Sign Up</a></p>
        </div>

        {error && <p className="mt-4 text-sm text-red-500 text-center">{error}</p>}
      </div>
    </div >
  );
};

export default Home;
