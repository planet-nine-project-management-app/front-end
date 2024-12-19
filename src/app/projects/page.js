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
            <header className="w-full flex justify-between items-center h-[150px]">
              <div className="w-[95%] mx-auto border-b pb-[20px] border-white">
                <div className="flex justify-between mb-4 items-center">
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
                    className="text-white text-2xl hover:text-green-500 transition duration-300"
                  >
                    ☰
                  </button>
                </div>
              </div>
            </header>
            <div className="flex items-center mt-4 justify-center space-x-4">
              {/* Project Cards */}
              <div className="h-[180px] hidden md:flex flex-col text-right justify-center w-1/4 p-8 rounded-1.5rem border-[1px] border-white border-solid text-white hover:bg-gray-100 hover:text-black hover:cursor-pointer transition duration-300">
                <h2 className="text-lg font-semibold">المشروع الثالث</h2>
                <button className="text-green-500 mt-4">{'←'}</button>
                <p className="text-sm">الوصف</p>
              </div>
              <div className="h-[180px] flex flex-col text-right justify-center w-1/4 bg-white p-8 rounded-1.5rem shadow-md hover:bg-gray-100 transition duration-300 hover:cursor-pointer">
                <h2 className="text-lg font-semibold">المشروع الثاني</h2>
                <p className="text-sm">الوصف</p>
                <button className="text-green-500 mt-4">{'←'}</button>
              </div>
              <div className="h-[180px] hidden md:flex flex-col text-right justify-center w-1/4 p-8 rounded-1.5rem border-[1px] border-white border-solid text-white hover:bg-gray-100 hover:text-black hover:cursor-pointer transition duration-300">
                <h2 className="text-lg font-semibold">مشروع التميز المؤسسي</h2>
                <p className="text-sm">الوصف</p>
                <button className="text-green-500 mt-4">{'←'}</button>
              </div>
            </div>
          </div>
        </main>

        {/* Modal and Overlay */}
        {isModalOpen && (
          <>
            {/* Overlay */}
            <div className="fixed inset-0 bg-black bg-opacity-50 z-10"></div>

            {/* Modal */}
            <div
              ref={modalRef}
              className="absolute top-0 right-0 w-[250px] h-full bg-green-500 text-white flex flex-col p-6 rounded-1.5rem z-20"
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="self-end text-white text-2xl hover:text-gray-200 transition duration-300"
              >
                ✕
              </button>
              <nav className="mt-8 space-y-4 text-lg">
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
        )}
      </div>
    </div>
  );
};

export default ProjectsPage;
