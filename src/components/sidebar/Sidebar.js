import React, { useState, useEffect, useRef } from "react";
import { SiBoxysvg } from "react-icons/si";
import "./sidebar.css";
import Navbar from "../navbar/Navbar";

const Sidebar = () => {
  return (
    <div className="flex">
      <div className="flex flex-col h-screen p-3 bg-white shadow w-60 ">
        <div className="space-y-3">
          <div className="flex items-center">
            <h2 className="text-xl font-bold">Stealth</h2>
          </div>
          <div className="flex-1">
            <ul className="pt-2 pb-4 space-y-1 text-sm">
              <li className="rounded-sm sidebar-firsturl">
                <a href="" className="flex items-center p-2 space-x-3 rounded-md">
                  <SiBoxysvg />
                  <span>File Manager</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Sidebar;
