import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./allitems.css";
import { FiEdit, FiSettings } from "react-icons/fi";
import DeleteTooltip from "./Deletetooltip";
function AllItems() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="grid grid-rows-2 grid-flow-col gap-4 alit">
        <div className="row-span-3 col-span-4 p-4 allitmes-div">
          <div className="bg-white">
            All Items
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2">
                      <input type="checkbox" className=" checked:bg-blue-500 " />
                    </th>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Owner</th>
                    <th className="px-4 py-2">Labels</th>
                    <th className="px-4 py-2">Type</th>
                    <th className="px-4 py-2">Modified</th>
                    <th className="px-4 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2">
                      <input type="checkbox" className=" checked:bg-blue-500 " />
                    </td>
                    <td className="px-4 py-2 sampleth">Sample File 1</td>
                    <td className="px-4 py-2">Img</td>
                    <td className="px-4 py-2 sampletd">Label 1</td>
                    <td className="px-4 py-2 sampletd">PDF</td>
                    <td className="px-4 py-2 sampletd">4th April '23</td>
                    <td className="px-4 py-2 flex sampletd">
                      <FiEdit className="mr-2" />
                      <DeleteTooltip />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllItems;
