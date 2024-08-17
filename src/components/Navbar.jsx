import React from 'react';
import { FaYoutube, FaSearch, FaBell, FaUserCircle, FaMicrophone, FaBars } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-around p-4 bg-white text-gray-800">

      {/* youtube logo */}

      <div className="flex items-center text-2xl font-bold">
        <FaBars className="text-2xl cursor-pointer" />
        <FaYoutube className="text-red-600 mr-1" />
        <span>YouTube <sup className='text-xs'>IN</sup> </span>
      </div>
      
      {/* Search bar */}

      <div className="flex flex-grow max-w-lg mx-4">
        <input
          type="text"
          className="flex-grow p-3 rounded-full bg-gray-100 text-gray-800 border border-gray-300"
          placeholder="Search"
        />
        <button className="p-2 bg-gray-200 rounded-r-md hover:bg-gray-300">
          <FaSearch />
        </button>

        <button className="p-2 ml-2 bg-gray-200 rounded-full hover:bg-gray-300">
          <FaMicrophone className="text-gray-800" />
        </button>
      </div>
      
      {/* right side navigation icons */}

      <div className="flex items-center space-x-4">
        <FaBell className="text-xl cursor-pointer hover:text-red-600" />
        <FaUserCircle className="text-xl cursor-pointer hover:text-red-600" />
      </div>
    </nav>
  );
};

export default Navbar;
