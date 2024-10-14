
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom'; 

const Header = ({ toggleSidebar }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="flex justify-between items-center bg-white p-4 shadow-md relative">
      <h1 className="text-xl font-bold">App Name</h1>
      <div className="flex items-center">
        <button onClick={handleToggleMenu} className="md:hidden text-gray-700">
        ☰
        </button>
        <div className="relative">
          <button onClick={toggleSidebar} className="hidden md:block text-gray-700 text-2xl">
          
          ☰
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg z-10">
              <ul className="py-1">
                <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer"><Link to="/dashboard">Dashboard</Link></li>
                <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer"><Link to="#">Profile</Link></li>
                <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer"> <Link to="#">Settings</Link></li>
                <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer"> <Link to="/">Logout</Link></li>
              </ul>
            </div>
          )}
        </div>
      
        {/* User Profile Icon */}
        <span className="text-gray-700 ml-4 flex items-center">
          <FontAwesomeIcon icon={faUserCircle} className="mr-2" style={{ fontSize: '30px' }} />
          <span className="hidden md:block">
            </span> 
        </span>
      </div>
    </header>
  );
};

export default Header;
