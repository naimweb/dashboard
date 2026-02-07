import React, { useState } from "react";
import { MdDashboard } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoBag } from "react-icons/io5";
import { FaChartLine } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const sidebarItems = [
  { name: "Dashboard",
     icon: <MdDashboard />,
      link: "/"
     },
  { 
    name: "Profile", 
    icon: <FaUser />,
     link: "/profile"
     },
  { 
    name: "Order",
     icon: <AiOutlineShoppingCart />,
      link: "/order"
     },
  { 
    name: "Product", 
    icon: <IoBag />, 
    link: "/product"
   },
  { 
    name: "Sales Report", 
    icon: <FaChartLine />,
     link: "/report"
     },
];

const Sidebar = ({ toggleSidebar }) => {
  const [isActive, setIsActive] = useState(0);

  return (
    <div className="bg-slate-800 text-white h-screen w-64 p-4 relative z-50">
      <ul className="space-y-2 mt-4">
        {sidebarItems.map((item, idx) => (
          <Link
            key={item.name}
            to={item.link}
            onClick={() => setIsActive(idx)}
            className={`flex items-center gap-3 px-4 py-2 rounded-md transition
              ${isActive === idx ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-slate-700 hover:text-white"}`}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="text-sm font-medium">{item.name}</span>
          </Link>
        ))}
      </ul>

      <button
        onClick={toggleSidebar}
        className="md:hidden absolute top-3 right-3 text-2xl"
      >
        <IoMdClose />
      </button>
    </div>
  );
};

export default Sidebar;
