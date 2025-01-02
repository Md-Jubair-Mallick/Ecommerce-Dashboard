import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <aside
      className={`lg:relative fixed lg:block w-64 bg-gray-800 text-white h-screen transition-all duration-300 z-10 ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="p-4">
        <h2 className="mb-6 text-xl font-bold">Admin Dashboard</h2>
        <nav className="space-y-4">
          <NavLink
            to="/"
            className="block px-4 py-2 rounded hover:bg-gray-700"
            onClick={toggleSidebar}
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/products"
            className="block px-4 py-2 rounded hover:bg-gray-700"
            onClick={toggleSidebar}
          >
            Products
          </NavLink>
          <NavLink
            to="/orders"
            className="block px-4 py-2 rounded hover:bg-gray-700"
            onClick={toggleSidebar}
          >
            Orders
          </NavLink>
          <NavLink
            to="/customers"
            className="block px-4 py-2 rounded hover:bg-gray-700"
            onClick={toggleSidebar}
          >
            Customers
          </NavLink>
          <NavLink
            to="/reviews"
            className="block px-4 py-2 rounded hover:bg-gray-700"
            onClick={toggleSidebar}
          >
            Reviews
          </NavLink>
          <NavLink
            to="/analytics"
            className="block px-4 py-2 rounded hover:bg-gray-700"
            onClick={toggleSidebar}
          >
            Analytics
          </NavLink>
        </nav>
      </div>
    </aside>
  );
}

export default Sidebar;
