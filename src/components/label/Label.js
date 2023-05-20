import React from 'react'

function Label({ label }) {
    return (
        <div>
            <li>
                <input type="checkbox" /> {label.Name}
            </li>
        </div>
    )
}

export default Label