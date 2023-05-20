import React from "react";
import "./labels.css";
function Label({ label }) {
  return (
    <div>
      <li className="cat-lables">
        <input type="checkbox" /> {label.Name}
      </li>
    </div>
  );
}

export default Label;
