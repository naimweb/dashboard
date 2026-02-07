import React, { useState } from "react";
import Dashboard from "./Components/dashboard/dashboard.jsx";
import MainBoard from "./Components/dashboard/MainBoard.jsx";
import Navbar from "./Components/navbar/navbar.jsx";
import Order from "./Components/order/order.jsx";
import Product from "./Components/product/product.jsx";
import Profile from "./Components/profile/profile.jsx";
import Report from "./Components/salesReport/report.jsx";
import Sidebar from "./Components/sidebar/sidebar.jsx";
import Error from "./Components/Error/Error.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  const [open, setOpen] = useState(false);
  const toggleSidebar = () => setOpen(!open);

  return (
    <div className="bg-gray-900">
      <div className="container bg-gray-800 flex mx-auto min-h-screen relative">
        
        {/* Sidebar */}
        <div className={`top-0 left-0 transition-all duration-200 ${open ? "left-0" : "-left-full"}`}>
          <Sidebar toggleSidebar={toggleSidebar} />
        </div>

        {/* Main Content */}
        <Routes>
          <Route path="/" element={<MainBoard toggleSidebar={toggleSidebar} />}>
            <Route index element={<Dashboard />} />
            <Route path="profile" element={<Profile />} />
            <Route path="order" element={<Order />} />
            <Route path="product" element={<Product />} />
            <Route path="report" element={<Report />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>

      </div>
    </div>
  );
}

export default App;
