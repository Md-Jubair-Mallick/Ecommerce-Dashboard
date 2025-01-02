import React from "react";
import { Outlet } from "react-router-dom";

function MainContentArea() {
  return (
    <main className="flex-1 p-4 mx-auto mt-10 bg-gray-100 rounded-md sm:p-6 lg:ml-10 lg:mr-10">
      <h1
        className="p-4 mb-6 text-2xl font-semibold bg-gray-200 rounded-md sm:p-6 sm:text-3xl"
      >
        Welcome to the Admin Dashboard
      </h1>
      <div className="container mx-auto bg-gray-100">
        <Outlet />
      </div>
    </main>
  );
}

export default MainContentArea;
