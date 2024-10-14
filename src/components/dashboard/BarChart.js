// src/components/BarChart.js
import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables); // Register all necessary components

const BarChart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null); // Create a ref to store the chart instance

  useEffect(() => {
    const data = {
      labels: ['A', 'B', 'C', 'D', 'E'],
      datasets: [
        {
          label: 'Values',
          data: [12, 25, 36, 18, 42],
          backgroundColor: 'steelblue',
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false, // Important for responsiveness
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Sample Bar Chart',
        },
      },
    };

    // Create a new Chart instance
    chartInstanceRef.current = new Chart(chartRef.current, {
      type: 'bar',
      data,
      options,
    });

    // Cleanup function to destroy the chart instance
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []); // Empty dependency array ensures this runs once on mount

  return <canvas ref={chartRef} className="w-full h-full"></canvas>; // Use a canvas ref
};

export default BarChart;
