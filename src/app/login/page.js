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
      router.push('/projects');
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="flex flex-col md:flex-row w-[75%] bg-white rounded-1.5rem shadow-lg overflow-hidden" style={{ height: 'calc(-90px + 80vh);' }}>
        <div className="hidden justify-center md:flex w-full md:w-1/2 bg-cover bg-center" style={{ backgroundImage: 'url(cover-photo.png)' }}>
          <div className="">
            <img
              src="hail-region-logo.png"
              alt="Logo"
              className="w-[270px] h-[80px]"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-20">
          <h1 className="text-[2.25rem] leading-[4.5rem] font-semibold text-gray-600 text-right w-full">!أهلا، إسم التعريف</h1>
          <p className='mb-6 text-right w-full text-[25px] font-bold text-gray-500'>الرجاء إدخال المعلومات الخاصة </p>
          <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
            <div className='mt-8'>
              <label htmlFor="email" className="block text-[1.25rem] font-bold text-gray-600 text-right">اسم التعريف</label>
              <input
                id="email"
                type="email"
                placeholder="أدخل البريد ا@لكتروني"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="placeholder:text-[1.25rem] placeholder:font-bold placeholder:text-gray-500 mt-2 block w-full px-4 py-2 border border-gray-300 rounded-[2.375rem] h-[80px] text-right"
              />
            </div>

            <div className='mt-4'>
              <label htmlFor="password" className="block text-[1.25rem] font-bold text-gray-600 text-right">كلمة السر</label>
              <input
                id="password"
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="placeholder:text-[1.25rem] placeholder:font-bold placeholder:text-gray-500 mt-2 block w-full px-4 py-2 border border-gray-300 rounded-[2.375rem] h-[80px] text-right"
              />
            </div>

            <div className="flex justify-between items-center mt-12">
              <Link href="/forgot-password" className="text-[1.25rem] font-bold text-gray-500 hover:underline">نسيت كلمة السر</Link>
              <label className="text-[1.25rem] text-gray-500">
                <input type="checkbox" className="mr-2" />تذكر
              </label>
            </div>

            <button
              type="submit"
              className="w-full h-[80px] font-bold py-2 px-4 bg-primary text-white rounded-[40px] hover:bg-primary mt-4"
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
