// utils.js
export const filterProjects = (projects, filters) => {
  return projects.filter((project) => {
    const matchesName = project.name.toLowerCase().includes(filters.name.toLowerCase());
    const matchesCompany = project.company_id?.toString().includes(filters.company);
    const matchesStatus = project.status.toLowerCase().includes(filters.status.toLowerCase());
    const matchesStartDate = !filters.startDate || new Date(project.start_date) >= new Date(filters.startDate);
    const matchesEndDate = !filters.endDate || new Date(project.end_date) <= new Date(filters.endDate);
    return matchesName && matchesCompany && matchesStatus && matchesStartDate && matchesEndDate;
  });
};

export const sortProjects = (projects, sortedColumn, sortOrder) => {
  return [...projects].sort((a, b) => {
    if (a[sortedColumn] < b[sortedColumn]) return sortOrder === 'asc' ? -1 : 1;
    if (a[sortedColumn] > b[sortedColumn]) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });
};
