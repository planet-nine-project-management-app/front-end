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
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-1.5rem shadow-lg overflow-hidden" style={{ height: 'calc(-250px + 95vh);' }}>
        <div className="hidden md:flex w-full md:w-1/2 bg-cover bg-center" style={{ backgroundImage: 'url(login-page-image.png)' }}></div>
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
          <h1 className="text-3xl font-semibold  text-right w-full">!هلا، إسم التعريف</h1>
          <p className='mb-6 text-right w-full'>الرجاء إدخال المعلومات الخاصة </p>
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
              <Link href="/forgot-password" className="text-sm text-green-600 hover:underline">نسيت كلمة السر</Link>
              <label className="text-sm">
                <input type="checkbox" className="mr-2" /> تذكر
              </label>
            </div>

            <button
              type="submit"
              className="w-full h-[50px] py-2 px-4 bg-green-400 text-white rounded-[40px] hover:bg-green-300"
            >
              الدخول
            </button>
          </form>
          {error && <p className="mt-4 text-sm text-red-500 text-center">{error}</p>}
        </div>
      </div>
    </div >
  );
};

export default Home;
