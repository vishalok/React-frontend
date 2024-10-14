// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
const Sidebar = () => {
  return (
    <nav className="w-64 bg-white shadow-md md:block hidden">
      <div className="p-4 text-lg font-bold"><Link to="/dashboard">Dashboard</Link></div>
      <ul>
        <li className="p-2 hover:bg-gray-200 cursor-pointer"><Link to="#">Profile</Link></li>
        <li className="p-2 hover:bg-gray-200 cursor-pointer"><Link to="#">Settings</Link></li>
        <li className="p-2 hover:bg-gray-200 cursor-pointer"><Link to="/">Logout</Link></li>
      </ul>
    </nav>
  );
};

export default Sidebar;
