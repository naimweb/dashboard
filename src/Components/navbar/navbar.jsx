import React from 'react'
import { IoIosNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";



const Navbar = ({ toggleSidebar }) => {
  return (
    <>
    <nav className="bg-gray-600 shadow-md py-4 px-2 mt-2 mr-2 rounded-2xl">
      <div className="flex justify-between gap-2 items-center px-2">
        <button onClick={toggleSidebar} className="md:hidden cursor-pointer">
          <FiMenu className="text-white/50 text-2xl" />
        </button>
        <div className="flex bg-gray-500 items-center text-grayText justify-center gap-2 py-1.5 px-1.5 md:py-2.5 md:px-2.5 min-w-[200px] max-w-xl rounded-md w-[100%] ">
          <CiSearch className="text-xl" />
          <input
            type="text"
            placeholder="Search for something"
            className="bg-transparent text-gray-300 border-none w-full outline-none"
            />
        </div>
        <div className="flex items-center justify-content gap-x-2">
          <div className="relative">
            <div className="absolute bg-red-500 rounded-full w-2 h-2 top-[3px] right-[5px] "></div>
            <IoIosNotifications className="text-gray-400 text-[25px] md:text-[30px] cursor-pointer" />
          </div>
           <FaUser  className='cursor-pointer'/>
        </div>
      </div>
    </nav>
  
  </>
  );
};

export default Navbar;