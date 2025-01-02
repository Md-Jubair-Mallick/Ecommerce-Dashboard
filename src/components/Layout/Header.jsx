import React from "react";
import { useLogout } from "../../state/mutations/authMutations";
function Header() {
  const { mutate } = useLogout();
  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 z-10 w-full p-4 text-white bg-gray-800 shadow-md">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold"></div>
          <div className="flex items-center space-x-4">
            <span>Admin</span>
            <button className="px-4 py-2 text-white bg-red-500 rounded-md"
            aria-label="Logout"
            onClick={()=>mutate()}
            >
              Logout
            </button>
          </div>
        </div>
        {/* Responsive Design */}
      {/* <div className="block mt-2 sm:hidden">
        <button className="p-2 text-white bg-gray-700 rounded-md" aria-label="Open menu">
          <i className="fas fa-bars"></i>
        </button>
      </div> */}
      </header>
    </>
  );
}

export default Header;
