'use client';

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/forgot_password`,
        {
          email,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        }
      );

      setSuccessMessage(response.data.message || 'تم إرسال تعليمات إعادة تعيين كلمة المرور إلى بريدك الإلكتروني.');
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'حدث خطأ ما.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4">
      <div className="flex flex-col md:flex-row w-full max-w-5xl bg-white rounded-1.5rem shadow-lg overflow-hidden" style={{ height: 'calc(-250px + 95vh);' }}>
        <div className="hidden md:flex w-full md:w-1/2 bg-cover bg-center" style={{ backgroundImage: 'url(login-page-image.png)' }}></div>
        <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
          <h1 className="text-2xl font-semibold mb-6 text-right">نسيت كلمة السر؟</h1>
          <p className="text-right mb-4">أدخل بريدك الإلكتروني لإعادة تعيين كلمة المرور.</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-right">البريد الإلكتروني</label>
              <input
                id="email"
                type="email"
                placeholder="اكتب بريدك الإلكتروني هنا"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md text-right"
              />
            </div>

            <button
              type="submit"
              className="w-full h-[45px] py-2 px-4 bg-green-500 text-white rounded-[40px] hover:bg-green-600"
            >
              إرسال التعليمات
            </button>
          </form>

          {successMessage && <p className="mt-4 text-sm text-green-600 text-center">{successMessage}</p>}
          {error && <p className="mt-4 text-sm text-red-500 text-center">{error}</p>}

          <p className="mt-4 text-sm text-center">
            <a
              onClick={() => router.push('/login')}
              className="text-green-600 hover:underline cursor-pointer"
            >
              العودة إلى تسجيل الدخول
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
