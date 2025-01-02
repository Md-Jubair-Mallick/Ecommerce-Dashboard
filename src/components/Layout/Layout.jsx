import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainContentArea from "./MainContentArea";


const Layout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex w-screen h-screen">
      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="flex flex-col flex-1 w-full">
        {/* Header */}
        <Header />

        {/* Main Content Area */}
        <div
          className={`flex-1 mt-16 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-0"}`}
        >
          <MainContentArea />
        </div>
      </div>

      {/* Sidebar Toggle Button for Mobile */}
      <button
        onClick={toggleSidebar}
        className="fixed z-20 p-2 text-white transition-transform duration-300 bg-gray-800 rounded-md top-4 left-4 lg:hidden"
        aria-label="Toggle Sidebar"
        aria-expanded={isSidebarOpen}
      >
        ☰
      </button>
    </div>
  );
};

export default Layout;
