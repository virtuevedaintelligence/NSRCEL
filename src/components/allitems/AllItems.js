import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./allitems.css";
import Item from "../item/Item";
import ItemHeading from "../itemheading/ItemHeading";
import { files } from "../../store/slices/FilesSlice";

function AllItems() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(files());
  }, []);
  const filesRes = useSelector((state) => state.files.dataFiles);
  if (!filesRes) {
    // Render a loading state or return null if you want to show nothing
    return <div>Loading...</div>;
  }
  return (
    <>
      <div className="grid grid-rows-2 grid-flow-col gap-4 alit">
        <div className="row-span-3 col-span-4 p-4 allitmes-div">
          <div className="bg-white">
            All Items
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <ItemHeading />
                <tbody>
                  {filesRes.map((file) => {
                    return <Item key={file.id} file={file}></Item>;
                  })}
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
