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

  // If user is authenticated, render the sidebar
  if (!isAuthenticated) {
    return null; // Or redirect to login page or show a different component
  }

  return (
    <div className="flex flex-col w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-2xl font-semibold mb-8">Project Dashboard</h2>
      <nav>
        <ul>
          <li>
            <Link href="/dashboard" className="block py-2 px-4 hover:bg-gray-700 rounded">
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="/projects" className="block py-2 px-4 hover:bg-gray-700 rounded">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/users" className="block py-2 px-4 hover:bg-gray-700 rounded">
              Users
            </Link>
          </li>
          <li>
            <Link href="/settings" className="block py-2 px-4 hover:bg-gray-700 rounded">
              Settings
            </Link>
          </li>
          <li>
            <button
              onClick={() => {
                localStorage.removeItem('token');
                router.push('/');
              }}
              className="block py-2 px-4 mt-4 bg-red-600 hover:bg-red-700 rounded text-white"
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
