'use client';

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

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
          },
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        }
      );

      localStorage.setItem('token', response.data.token);
      router.push('/');
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F5F5DC] p-4">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Left Image Section */}
        <div className="hidden md:flex w-full md:w-1/2 bg-cover bg-center" style={{ backgroundImage: 'url(login-page-image.png)' }}>
        </div>

        {/* Right Form Section */}
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
          <h1 className="text-3xl font-semibold mb-6 text-right w-full">هلا! إدخال معلومات الدخول</h1>
          <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-right">اسم التعريف</label>
              <input
                id="email"
                type="email"
                placeholder="اكتب إيميلك هنا"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md text-right"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-right">كلمة السر</label>
              <input
                id="password"
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md text-right"
              />
            </div>

            <div className="flex justify-between items-center">
              <label className="text-sm">
                <input type="checkbox" className="mr-2" /> تذكر
              </label>
              <Link href="/forgot-password" className="text-sm text-green-600 hover:underline">نسيت كلمة السر</Link>
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600"
            >
              الدخول
            </button>
          </form>
          <p className="mt-4 text-sm text-center">
            ليس لديك حساب؟ <Link href="/signup" className="text-green-600 hover:underline">إشترك</Link>
          </p>
          {error && <p className="mt-4 text-sm text-red-500 text-center">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Home;
