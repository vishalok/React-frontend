// src/components/LineChart.js
import React, { useEffect, useRef } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables); 

const LineChart = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null); 

  useEffect(() => {
    const data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Sales',
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          backgroundColor: 'rgba(75, 192, 192, 1)',
          borderColor: 'rgba(75, 192, 192, 0.2)',
        },
      ],
    };

    const options = {
      responsive: true,
      maintainAspectRatio: false, 
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Sales Over Time',
        },
      },
    };

    // Create a new Chart instance
    chartInstanceRef.current = new Chart(chartRef.current, {
      type: 'line',
      data,
      options,
    });

    // Cleanup function to destroy the chart instance
    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, []); 

  return <canvas ref={chartRef} className="w-full h-full"></canvas>; 
};

export default LineChart;
