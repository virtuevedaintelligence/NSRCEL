import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import ReactTooltip from "react-tooltip";

function DeleteTooltip() {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    setShowTooltip(!showTooltip);
  };

  return (
    <>
      <span data-tip={showTooltip ? "remove" : ""} data-for="delete-tooltip" className="cursor-pointer" onClick={handleClick}>
        {/* Replace with your delete icon */}
        <FaTrash />
      </span>

      {showTooltip && (
        <ReactTooltip id="delete-tooltip" place="right" effect="solid">
          <div className="flex flex-col">
            <span>
              <FaTrash /> Remove
            </span>
            <div className="flex justify-end mt-2">
              <button className="mr-2 px-4 py-2 bg-red-500 text-white rounded">Yes</button>
              <button className="px-4 py-2 bg-gray-500 text-white rounded">No</button>
            </div>
          </div>
        </ReactTooltip>
      )}
    </>
  );
}

export default DeleteTooltip;
