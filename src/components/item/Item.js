import React from "react";

import { FiEdit, FiSettings } from "react-icons/fi";
import DeleteTooltip from "../allitems/Deletetooltip";

function Item({ file }) {
    return (
        <>
            <tr>
                <td className="px-4 py-2">
                    <input type="checkbox" className=" checked:bg-blue-500 " />
                </td>
                <td className="px-4 py-2 sampleth">{file.Name}</td>
                <td className="px-4 py-2"><img src={file.file} /></td>
                <td className="px-4 py-2 sampletd">Label 1</td>
                <td className="px-4 py-2 sampletd">{file.Type}</td>
                <td className="px-4 py-2 sampletd">{file.ModifietAt}</td>
                <td className="px-4 py-2 flex sampletd">
                    <FiEdit className="mr-2" />
                    <DeleteTooltip />
                </td>
            </tr>
        </>
    );
}

export default Item;
