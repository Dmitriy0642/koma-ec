import React from "react";
import SortingCategory from "./SortingCategory";
import SortingSubCategory from "./SortingSubCategory";
import SortingBrands from "./SortingBrands";
const SortingComponent: React.FC = () => {
  return (
    <div>
      <SortingCategory />
      <SortingSubCategory />
      <SortingBrands />
    </div>
  );
};

export default SortingComponent;
