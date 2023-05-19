import React from "react";

import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="container mx-auto main-sidebar">
        <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2">
          <div className="w-full px-4 py-5 bg-white ml-4">
            <div className="mt-1 text-3xl font-semibold text-gray-900">Filemanager</div>
          </div>
          <div className="w-full px-4 py-5 bg-white">
            <div className="mt-1 font-semibold text-gray-900 text-right">
              <button className="btn-customised">+ Upload</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
