import React from 'react';
import { FaHome, FaVideo, FaPlayCircle, FaBook, FaList, FaClock, FaThumbsUp, FaBars, FaAngleRight, FaDownload, FaUserCircle } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className="w-64 h-full bg-white text-gray-800">
      <nav className="flex flex-col space-y-2 mt-4">
        <SidebarItem icon={FaHome} label="Home" />
        <SidebarItem icon={FaVideo} label="Shorts" />
        <SidebarItem icon={FaPlayCircle} label="Subscriptions" />
        <hr className="my-2" />

        <div className='flex font-bold'>
          <p>You</p>
          <FaAngleRight></FaAngleRight>
        </div>
        <SidebarItem icon={FaBook} label="Your channel" />
        <SidebarItem icon={FaList} label="History" />
        <SidebarItem icon={FaList} label="Playlists" />
        <SidebarItem icon={FaUserCircle} label="Your videos" />
        <SidebarItem icon={FaClock} label="Watch Later" />
        <SidebarItem icon={FaThumbsUp} label="Liked Videos" />
        <SidebarItem icon={FaDownload} label="Downloads" />
        <hr className="my-2" />
        
        <div className='font-bold text-left'>Subscriptions</div>
        <SidebarItem icon={FaUserCircle} label="Katrina Kaif" />
        <SidebarItem icon={FaUserCircle} label="Deepika Padukone" />
        <SidebarItem icon={FaUserCircle} label="Kartik Aryan" />
        <SidebarItem icon={FaUserCircle} label="Vicky Kaushal" />
        <SidebarItem icon={FaUserCircle} label="Kiara Advani" />
        <SidebarItem icon={FaUserCircle} label="Sidharth Malhotra" />
        <SidebarItem icon={FaUserCircle} label="Alia Bhatt" />
      </nav>
    </aside>
  );
};

const SidebarItem = ({ icon: Icon, label }) => (
  <div className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
    <Icon className="text-xl mr-4" />
    <span className="text-md">{label}</span>
  </div>
);

export default Sidebar;
