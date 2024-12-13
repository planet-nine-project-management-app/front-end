'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import PieChart from './components/PieChart';
import ProjectsTable from './components/ProjectsTable';
import Filters from './components/Filter';
import { filterProjects, sortProjects } from './utils/utils';
import Sidebar from './components/Sidebar';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState({
    name: '',
    company: '',
    status: '',
    startDate: '',
    endDate: '',
  });
  const [sortedColumn, setSortedColumn] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const router = useRouter();

  useEffect(() => {
    const fetchProjects = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        router.push('/login');
        return;
      }

      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/projects`,
          {
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [router]);

  const handleLogout = async () => {
    const token = localStorage.getItem('token');

    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/sign_out`, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.removeItem('token');
      router.push('/login');
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredProjects = filterProjects(projects, filters);
  const sortedProjects = sortProjects(filteredProjects, sortedColumn, sortOrder);

  const handleSort = (column) => {
    const newSortOrder = sortedColumn === column && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortedColumn(column);
    setSortOrder(newSortOrder);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* <Sidebar /> */}

      <div className="flex-1 flex flex-col bg-white rounded-1.5rem shadow-lg m-4 p-6">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Project Management Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-blue-500 text-white px-6 py-2 rounded-md shadow-lg hover:bg-blue-600 transition duration-300"
          >
            Logout
          </button>
        </header>

        {error && <div className="text-red-500 mb-4">{error}</div>}

        {/* Graph Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Project Status Overview</h2>
          <div className="bg-gray-100 p-4 rounded-1.5rem shadow">
            <PieChart projects={projects} />
          </div>
        </section>

        {/* Filters Section */}
        <Filters filters={filters} handleFilterChange={handleFilterChange} />

        {/* Projects Table */}
        <div className="mt-8">
          <ProjectsTable
            projects={sortedProjects}
            sortedColumn={sortedColumn}
            sortOrder={sortOrder}
            handleSort={handleSort}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
