import React from 'react';

const ProjectsTable = ({ projects, sortedColumn, sortOrder, handleSort }) => {
  return (
    <section className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>
      <table className="w-full border-collapse border border-gray-200 rounded-lg shadow-sm">
        <thead className="bg-gray-100">
          <tr>
            {['name', 'company_id', 'start_date', 'end_date', 'status'].map((column) => (
              <th
                key={column}
                className="border border-gray-300 p-4 text-left text-sm font-semibold text-gray-700 cursor-pointer hover:bg-gray-200 transition duration-200"
                onClick={() => handleSort(column)}
              >
                {column.replace('_', ' ').toUpperCase()}{' '}
                {sortedColumn === column ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {projects.length > 0 ? (
            projects.map((project) => (
              <tr key={project.id} className="border border-gray-300 hover:bg-gray-50">
                <td className="p-4 text-sm text-gray-600">{project.name}</td>
                <td className="p-4 text-sm text-gray-600">{project.company_id}</td>
                <td className="p-4 text-sm text-gray-600">{project.start_date}</td>
                <td className="p-4 text-sm text-gray-600">{project.end_date}</td>
                <td className="p-4 text-sm text-gray-600">{project.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="5"
                className="p-4 text-center text-sm text-gray-500"
              >
                No projects found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
};

export default ProjectsTable;
