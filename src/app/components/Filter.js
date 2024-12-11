// Filters.js
import React from 'react';

const Filters = ({ filters, handleFilterChange }) => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Filters</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Filter by Name"
          className="p-2 border rounded"
          value={filters.name}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="company"
          placeholder="Filter by Company ID"
          className="p-2 border rounded"
          value={filters.company}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="status"
          placeholder="Filter by Status"
          className="p-2 border rounded"
          value={filters.status}
          onChange={handleFilterChange}
        />
        <input
          type="date"
          name="startDate"
          placeholder="Start Date"
          className="p-2 border rounded"
          value={filters.startDate}
          onChange={handleFilterChange}
        />
        <input
          type="date"
          name="endDate"
          placeholder="End Date"
          className="p-2 border rounded"
          value={filters.endDate}
          onChange={handleFilterChange}
        />
      </div>
    </section>
  );
};

export default Filters;
