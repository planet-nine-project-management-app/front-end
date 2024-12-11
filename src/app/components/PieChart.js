// PieChart.js
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ projects }) => {
  const projectStatus = {
    to_do: projects.filter((p) => p.status === 'to_do').length,
    in_progress: projects.filter((p) => p.status === 'in_progress').length,
    completed: projects.filter((p) => p.status === 'completed').length,
  };

  const chartData = {
    labels: ['To Do', 'In Progress', 'Completed'],
    datasets: [
      {
        data: [projectStatus.to_do, projectStatus.in_progress, projectStatus.completed],
        backgroundColor: ['#4caf50', '#2196f3', '#ff9800'],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,  // Disable default aspect ratio
  };

  return (
    <div style={{ width: '300px', height: '300px' }}>
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChart;
