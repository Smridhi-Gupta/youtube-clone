import React from "react";
import {
  FaYoutube,
  FaSearch,
  FaBell,
  FaUserCircle,
  FaMicrophone,
  FaBars,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-white text-gray-800">
      {/* youtube logo */}

      <div className="flex items-center text-2xl font-bold">
        <FaBars className="text-2xl cursor-pointer" />
        <FaYoutube className="text-red-600 mr-1" />
        <span>
          YouTube <sup className="text-xs">IN</sup>{" "}
        </span>
      </div>

      {/* Search bar */}

      <div className="flex items-center bg-white border rounded-full shadow-md max-w-lg mx-auto">
      <input
        type="text"
        placeholder="Search"
        className="w-full py-2 px-4 outline-none text-gray-800"
      />
      <div className="flex items-center pl-4">
      <FaSearch />
      </div>
      
      <div className="flex items-center pr-4">
        <FaMicrophone className="text-gray-800"/>
      </div>
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
