// src/Dashboard.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import LineChart from './LineChart';
import BarChart from './BarChart';

const Dashboard = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="flex flex-col md:flex-row">
      {sidebarVisible && <Sidebar />}
      <div className="flex-1 p-6">
        <Header toggleSidebar={toggleSidebar} />
        <main className="mt-4">
          <h1 className="text-2xl font-bold">Welcome to Your Dashboard</h1>
          <p className="mt-4">This area can be dynamically updated based on user interactions.</p>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold">Line Chart</h3>
              <div className="w-full h-64">
                <LineChart />
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-semibold">Bar Chart</h3>
              <div className="w-full h-64">
                <BarChart />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
