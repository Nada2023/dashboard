import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; 
import { RiDashboardFill } from "react-icons/ri";
import { HiMiniUsers } from "react-icons/hi2";
import { PiFolderUser } from "react-icons/pi";
import { MdMedicalServices } from "react-icons/md";
import { IoIosColorPalette } from "react-icons/io";
import { IoMdMailUnread } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";
import { SiCodeblocks } from "react-icons/si";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleSidebar = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <div>
  
      <div className="md:hidden p-4">
        <button onClick={toggleSidebar}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>


      <div
        className={`${
          isOpen ? "block" : "hidden"
        } w-64 h-screen bg-gray-900 text-gray-300 flex flex-col p-5 md:block`}
      >
        <h2 className="flex text-lg font-bold mb-5"><SiCodeblocks  className="mt-1 mr-1 text-blue-200" />TECNO BLOCKS</h2>
        <ul className="space-y-9">
          
          <li className="flex font-bold text-lg text-purple-500"><RiDashboardFill className="mt-1 mr-1" />Dashboard</li>
          <li className="flex "><HiMiniUsers  className="mt-1 mr-1"/> Users</li>
          <l className="flex "i> <PiFolderUser  className="mt-1 mr-1"/> Orders</l>
          <li className="flex " > <MdMedicalServices className="mt-1 mr-1"/> Services</li>
          <li className="flex "><IoIosColorPalette className="mt-1 mr-1"/>Themes</li>
          <li className="flex "><IoMdMailUnread className="mt-1 mr-1"/> Jobs</li>
          <li className="w-full h-1 text-gray-200 bg-gray-700"></li>
          <li className="mt-auto flex"> <IoMdSettings className="mt-1 mr-1"/> Settings</li>
          <li className="flex "><MdOutlineLogout className="mt-1 mr-1 text-red-700" /> Logout</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
