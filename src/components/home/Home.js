import React from "react";
import AllItems from "../allitems/AllItems";
import Categories from "../categories/Categories";
import { FiSettings } from "react-icons/fi";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
import Search from "./Search";

function Home() {
  return (
    <>
      <div className="flex">
        <div className="">
          <Sidebar />
        </div>
        <div className="w-full">
          <Navbar />
          <Search />
          <div className="all-items h-96">
            <div className="grid grid-rows-2 grid-flow-col gap-4">
              <div className="row-span-3 col-span-1  d-flex px-6">
                <div className="w-full flex mb-4">
                  CATEGORIES <FiSettings className="mt-1 ml-4" />
                </div>
                <Categories />
              </div>
              <div className="row-span-3 col-span-4  ">
                <AllItems />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
