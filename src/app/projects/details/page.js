'use client';

import { useState, useRef, useEffect } from 'react';

const ProjectDetails = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null);

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

  const projectData = {
    id: '1',
    name: 'Project 1',
    description: 'Details about project 1',
    startDate: '2022-06-06',
    status: 'Completed',
    progress: 70,
    milestones: [
      { title: 'Social Media Marketing', dueDate: 'June 6, 2022', status: 'Completed', progress: 70 },
      { title: 'HR Activities', dueDate: 'July 10, 2022', status: 'On Track', progress: 85 },
      { title: 'Software Architecture', dueDate: 'Nov 5, 2022', status: 'Delayed', progress: 50 },
      { title: 'Media Channel', dueDate: 'Nov 20, 2022', status: 'At Risk', progress: 30 },
    ],
    totalMilestones: 24,
    achievedMilestones: 15,
    delayedMilestones: 5,
    onTrackMilestones: 4,
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 bg-[#F5F5DC] relative">
      <div className="relative w-[75%] bg-white rounded-1.5rem shadow-lg overflow-hidden" style={{ height: 'calc(-90px + 80vh)' }}>
        <main className="flex flex-col items-center justify-center w-full">
          <div
            className="w-full h-[800px] md:h-[850px] bg-cover bg-center rounded-1.5rem shadow-lg"
            style={{ backgroundImage: 'url(/cover-photo.png)' }}
          >
            <div className="flex justify-center items-center h-[80%] w-full">
              <div className="bg-white rounded-1.5rem shadow-lg relative w-[90%]">
                <header className="flex justify-between mb-6 m-10">
                  <div className=''>
                    <h1 className="text-2xl font-bold">{projectData.name}</h1>
                    <p className="text-gray-600 mt-2">{projectData.description}</p>
                  </div>
                  <button
                    onClick={() => setIsModalOpen(!isModalOpen)}
                    className="w-[50px] h-[50px] rounded-full bg-primary text-[25px] font-bold text-white transition duration-300"
                  >
                    ☰
                  </button>
                </header>
                <div className="m-10 grid gap-6 grid-cols-[70%,30%]">
                  {/* Left Section */}
                  <div className="bg-gray-50 rounded-lg p-4 text-center shadow-md grid gap-4">
                    <div className="grid gap-4 grid-cols-3">
                      <select className="p-3 border rounded">
                        <option>Select Project</option>
                      </select>
                      <select className="p-3 border rounded">
                        <option>Select Milestones</option>
                      </select>
                      <select className="p-3 border rounded">
                        <option>Status</option>
                      </select>
                    </div>
                    <div className="mt-6">
                      <table className="w-full text-left border-collapse">
                        <thead>
                          <tr className="bg-gray-100 text-gray-700">
                            <th className="p-3 border">Milestone</th>
                            <th className="p-3 border">Due Date</th>
                            <th className="p-3 border">Status</th>
                            <th className="p-3 border">Progress</th>
                          </tr>
                        </thead>
                        <tbody>
                          {projectData.milestones.map((milestone, index) => (
                            <tr key={index} className="hover:bg-gray-50">
                              <td className="p-3 border">{milestone.title}</td>
                              <td className="p-3 border">{milestone.dueDate}</td>
                              <td className="p-3 border">{milestone.status}</td>
                              <td className="p-3 border">
                                <div className="flex items-center">
                                  <div className="relative w-full h-2 bg-gray-200 rounded">
                                    <div
                                      className={`absolute h-2 rounded ${milestone.progress >= 70
                                        ? 'bg-green-500'
                                        : milestone.progress >= 50
                                          ? 'bg-yellow-500'
                                          : 'bg-red-500'
                                        }`}
                                      style={{ width: `${milestone.progress}%` }}
                                    ></div>
                                  </div>
                                  <span className="ml-2 text-sm font-semibold">{milestone.progress}%</span>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  {/* Right Section */}
                  <div className="w-[95%] bg-gray-50 rounded-lg p-4 text-center shadow-md">
                    <h2 className="text-xl font-bold">Overall Progress</h2>
                    <div className="relative w-24 h-24 mx-auto mt-4">
                      <svg className="absolute top-0 left-0 w-full h-full">
                        <circle
                          className="text-gray-200"
                          strokeWidth="8"
                          fill="none"
                          r="38"
                          cx="50"
                          cy="50"
                        />
                        <circle
                          className="text-blue-500"
                          strokeWidth="8"
                          fill="none"
                          r="38"
                          cx="50"
                          cy="50"
                          style={{
                            strokeDasharray: 238,
                            strokeDashoffset: 238 - (238 * projectData.progress) / 100,
                          }}
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-bold">{projectData.progress}%</span>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-600">{projectData.totalMilestones} Total Milestones</p>
                    <ul className="text-sm mt-2 text-left">
                      <li>✅ {projectData.achievedMilestones} Milestones Achieved</li>
                      <li>⚠️ {projectData.delayedMilestones} Delayed Milestones</li>
                      <li>✔️ {projectData.onTrackMilestones} On Track</li>
                    </ul>
                  </div>
                </div>
                {/* Modal */}
                {isModalOpen && (
                  <div
                    ref={modalRef}
                    className="absolute top-0 right-0 w-[300px] h-[100%] bg-gray-100 p-4 z-10 rounded-lg shadow-lg overflow-auto"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-lg font-bold">Menu</h3>
                      <button
                        onClick={() => setIsModalOpen(false)}
                        className="text-2xl font-bold text-gray-600"
                      >
                        ×
                      </button>
                    </div>
                    <ul className="space-y-4">
                      <li><a href="#" className="block text-gray-700">Dashboard</a></li>
                      <li><a href="#" className="block text-gray-700">Projects</a></li>
                      <li><a href="#" className="block text-gray-700">Settings</a></li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProjectDetails;
