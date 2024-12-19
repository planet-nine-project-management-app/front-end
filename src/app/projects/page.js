'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const ProjectsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

  // Close modal if clicking outside it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-[#F5F5DC] relative">
      {/* Main Content */}
      <div className="relative w-[75%] bg-white rounded-1.5rem shadow-lg overflow-hidden" style={{ height: 'calc(-90px + 80vh);' }}>
        <main className="flex flex-col items-center justify-center w-full">
          <div
            className="w-full h-[800px] md:h-[850px] bg-cover bg-center rounded-1.5rem shadow-lg"
            style={{ backgroundImage: 'url(/projects.png)' }}
          >
            <header className="w-[90%] flex justify-between mx-auto items-center h-[100px]">
              <div className="w-[100%]">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <button className="group flex items-center justify-center w-10 h-10 text-white rounded-full border-solid overflow-hidden transition-all duration-300 hover:w-60 border-[1px] border-white">
                      <span className="opacity-0 ml-2 text-white transition-opacity duration-300 group-hover:opacity-100">البحث</span>
                    </button>
                    <button className="w-60 h-10 rounded-full bg-green-400">
                      <span className="text-white">هلا اسم التعريف</span>
                    </button>
                  </div>
                  {/* Menu Icon */}
                  <button
                    onClick={() => setIsModalOpen(!isModalOpen)}
                    className="text-white text-2xl transition duration-300"
                  >
                    ☰
                  </button>
                </div>
              </div>
            </header>
            <div className="border-t border-white w-[90%] mx-auto mb-12"></div>
            <div className="flex items-center justify-between w-[90%] mx-auto mt-4 space-x-4">
              <div className="h-[190px] text-right w-[30%] p-4 rounded-1.5rem border-[1px] border-white border-solid text-white hover:bg-gray-100 hover:text-black hover:cursor-pointer transition duration-300 flex flex-col justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-[25px]">المشروع الثالث</h2>
                </div>
                <div className="flex justify-between items-center">
                  <button className="w-[40px] h-[40px] bg-gray-300 rounded-full text-[30px] flex justify-center items-end">
                    {'←'}
                  </button>
                  <p className="text-[20px] font-semibold">الوصف</p>
                </div>
              </div>
              <div className="h-[190px] text-right w-[30%] p-4 rounded-1.5rem border-[1px] border-white border-solid text-white hover:bg-gray-100 hover:text-black hover:cursor-pointer transition duration-300 flex flex-col justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-[25px]">المشروع الثاني</h2>
                </div>
                <div className="flex justify-between items-center">
                  <button className="w-[40px] h-[40px] bg-gray-300 rounded-full text-[30px] flex justify-center items-end">
                    {'←'}
                  </button>
                  <p className="text-[20px] font-semibold">الوصف</p>
                </div>
              </div>
              <div className="h-[190px] text-right w-[30%] p-4 rounded-1.5rem border-[1px] border-white bg-white border-solid text-black hover:cursor-pointer transition duration-300 flex flex-col justify-between">
                <div>
                  <h2 className="text-lg font-semibold text-[25px]">مشروع التميز المؤسسي</h2>
                </div>
                <div className="flex justify-between items-center">
                  <button className="w-[40px] h-[40px] bg-green-400 text-white font-bold rounded-full text-[30px] flex justify-center items-end">
                    {'←'}
                  </button>
                  <p className="text-[20px] font-semibold">الوصف</p>
                </div>
              </div>
            </div>
            <div className="border-t border-white w-[90%] mx-auto my-4 mt-12 mb-16"></div>
            <div className='flex justify-between mt-8 w-[90%] mx-auto'>
              <div className='flex'>
                <div><p className="text-white text-[25px] pt-4 border-b-[2px] border-white border-solid pb-4">تفاصيل الانجاز</p></div>
                <div className="w-16 h-16 bg-green-500 border-[15px] border-white rounded-full ml-[20px] mt-[10px]"></div>
              </div>
              <div className='flex'>
                <p className='text-[21px] text-gray-500 w-[290px] text-right pt-4 mr-8'>وصف مختصر عن المشروع يمكن ان يمتد على أكثر من سطر بالشكل التالي</p>
                <h1 className='text-[50px] font-bold w-[300px] text-right'>مشروع التميز المؤسسي</h1>
              </div>
            </div>
          </div>
        </main>

        {/* Modal and Overlay */}
        {
          isModalOpen && (
            <>
              {/* Overlay */}
              <div className="fixed inset-0 bg-black bg-opacity-50 z-10"></div>

              {/* Modal */}
              <div
                ref={modalRef}
                className="absolute top-0 right-0 w-[400px] h-full mr-[55px] bg-green-500 text-white flex flex-col p-6 z-20"
              >
                {/* Close Button */}
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="self-end text-white text-2xl hover:text-gray-200 transition duration-300"
                >
                  X
                </button>

                {/* Navigation Menu */}
                <nav className="mt-12 text-right space-y-6 text-lg">
                  <Link href="/projects" className="block hover:underline">
                    المشاريع
                  </Link>
                  <Link href="/" className="block hover:underline">
                    داشبورد
                  </Link>
                  <Link href="/management" className="block hover:underline">
                    لوحات الإدارة
                  </Link>
                  <Link href="/logout" className="block hover:underline">
                    الخروج
                  </Link>
                </nav>
              </div>
            </>
          )
        }
      </div >
    </div >
  );
};

export default ProjectsPage;
