import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./allitems.css";
import { FiSettings } from "react-icons/fi";
function AllItems() {
  const dispatch = useDispatch();

  const categories = useSelector((state) => {
    console.log(state);
    return state.categories;
  });

  return (
    <>
      <div className="all-items h-96">
        <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-1 ">
          <div className="px-4 py-5  ml-4">
            <div className="mt-1 text-right">
              <input
                type="text"
                placeholder="Search by name"
                className="search mt-1 block px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
              />
            </div>
          </div>
          <div className="w-full px-4 py-5">
            <div className="mt-1 font-semibold text-gray-900 text-right">
              <button className="btn-customised">+ Upload</button>
            </div>
          </div>
        </div>
        <div class="grid grid-rows-2 grid-flow-col gap-4">
          <div class="row-span-3 col-span-1 border d-flex px-6">
            <div className="w-full flex mb-4">
              CATEGORIES <FiSettings className="mt-1 ml-4" />
            </div>
            <Categories />
          </div>
          <div class="row-span-3 col-span-4 border ">Table</div>
        </div>
      </div>
    </>
  );
}

export default AllItems;
