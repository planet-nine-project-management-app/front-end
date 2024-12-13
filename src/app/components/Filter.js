import React from 'react';

const Filters = ({ filters, handleFilterChange }) => {
  return (
    <section className="mb-8 bg-white p-6 rounded-1.5rem shadow-lg">
      <h2 className="text-2xl font-semibold mb-6">Filters</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Filter by Name"
          className="p-3 border border-gray-300 rounded-1.5rem shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={filters.name}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="company"
          placeholder="Filter by Company ID"
          className="p-3 border border-gray-300 rounded-1.5rem shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={filters.company}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="status"
          placeholder="Filter by Status"
          className="p-3 border border-gray-300 rounded-1.5rem shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={filters.status}
          onChange={handleFilterChange}
        />
        <input
          type="date"
          name="startDate"
          placeholder="Start Date"
          className="p-3 border border-gray-300 rounded-1.5rem shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={filters.startDate}
          onChange={handleFilterChange}
        />
        <input
          type="date"
          name="endDate"
          placeholder="End Date"
          className="p-3 border border-gray-300 rounded-1.5rem shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={filters.endDate}
          onChange={handleFilterChange}
        />
      </div>
    </section>
  );
};

export default Filters;
