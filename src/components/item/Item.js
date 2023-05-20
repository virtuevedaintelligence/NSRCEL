import React from 'react'

import { FiEdit, FiSettings } from "react-icons/fi";
import DeleteTooltip from "./Deletetooltip";

function Item() {
    return (
        <div>
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
        </div>
    )
}

export default Item