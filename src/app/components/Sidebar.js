'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Sidebar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="flex flex-col w-64 bg-gray-800 text-white min-h-screen p-6 rounded-1.5rem shadow-lg">
      <h2 className="text-2xl font-bold mb-8">Project Dashboard</h2>
      <nav className="flex flex-col space-y-4">
        <Link href="/dashboard" className="block py-2 px-4 bg-gray-700 hover:bg-gray-600 rounded">
          Dashboard
        </Link>
        <Link href="/projects" className="block py-2 px-4 bg-gray-700 hover:bg-gray-600 rounded">
          Projects
        </Link>
        <Link href="/users" className="block py-2 px-4 bg-gray-700 hover:bg-gray-600 rounded">
          Users
        </Link>
        <Link href="/settings" className="block py-2 px-4 bg-gray-700 hover:bg-gray-600 rounded">
          Settings
        </Link>
        <button
          onClick={() => {
            localStorage.removeItem('token');
            router.push('/');
          }}
          className="block py-2 px-4 mt-8 bg-red-600 hover:bg-red-500 rounded text-white"
        >
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
