// ProjectsTable.js
import React from 'react';

const ProjectsTable = ({ projects, sortedColumn, sortOrder, handleSort }) => {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Projects</h2>
      <table className="w-full border-collapse border">
        <thead>
          <tr>
            {['name', 'company_id', 'start_date', 'end_date', 'status'].map((column) => (
              <th
                key={column}
                className="border p-2 cursor-pointer"
                onClick={() => handleSort(column)}
              >
                {column.replace('_', ' ').toUpperCase()}{' '}
                {sortedColumn === column ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id} className="border">
              <td className="p-2">{project.name}</td>
              <td className="p-2">{project.company_id}</td>
              <td className="p-2">{project.start_date}</td>
              <td className="p-2">{project.end_date}</td>
              <td className="p-2">{project.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default ProjectsTable;
