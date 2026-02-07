import React from "react";
import Navbar from "../navbar/navbar";
import { Outlet } from "react-router-dom";

function MainBoard({ toggleSidebar }) {
  return (
    <div className="flex-1 hide-scrollbar transition-all max-h-screen overflow-y-scroll">
      <Navbar toggleSidebar={toggleSidebar} />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default MainBoard;
