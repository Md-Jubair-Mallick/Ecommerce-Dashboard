import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">Dashboard</h1>

      <section className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h3 className="text-2xl font-semibold text-gray-700 mb-2">
          User Management
        </h3>
        <p className="text-gray-600 mb-4">
          Manage users and roles effectively.
        </p>
        <div className="flex items-center space-x-4">
          <Link
            to="/me"
            className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
          >
            View Users
          </Link>
          <Link to="/register">
            <button className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2">
              Register
            </button>
          </Link>
          <Link to="/login">
            <button className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2">
              Login
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
