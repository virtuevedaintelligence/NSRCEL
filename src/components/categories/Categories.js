import React from "react";
import Label from "../label/Label";
import Category from "../category/Category";

function Categories() {
  return (
    <div>
      <Category />
      <ul className="mb-4">
        <Label />
      </ul>
    </div>
  );
}

export default Categories;
