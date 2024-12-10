'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchProjects = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/');
        return;
      }

      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/projects`,
          {
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
              'Authorization': `Bearer ${token}`
            }
          });

        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);  // Empty dependency array ensures this effect runs only once on page load

  const handleLogout = async () => {
    const token = localStorage.getItem('token');

    try {
      await axios.delete(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/sign_out`,
        {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        }
      );
      localStorage.removeItem('token');
      router.push('/');
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="text-black min-h-screen">
      <div className="max-w-7xl mx-auto p-4">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Project Management Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-lg hover:bg-blue-600 transition duration-300"
          >
            Logout
          </button>
        </header>
        {error && <div>{error}</div>}

        <section>
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.length > 0 ? (
              projects.map((project) => (
                <li
                  key={project.id}
                  className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                  <p className="text-gray-700">{project.description}</p>
                </li>
              ))
            ) : (
              <p className="text-gray-500">No projects found.</p>
            )}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
