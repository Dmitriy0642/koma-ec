"use client";
import React, { useState } from "react";
import { useRequest } from "../hooks/useRequest";
import Loader from "./Loader";
import "../styles/sorting.css";

const SortingBrands: React.FC<onClickProps> = ({ onClick, filter }) => {
  const [showAll, setShowAll] = useState(false);
  const { data, isLoading, isError } = useRequest("brands");
  if (isLoading) {
    return <Loader />;
  }
  const handleToggleShow = () => {
    setShowAll(!showAll);
  };
  return (
    <div className="sort_block">
      <h3 className="title_sort">Brand</h3>
      <div>
        {data
          .slice(0, showAll ? data.length : 5)
          .map((item: { _id: string; name: string }) => (
            <button
              className={
                filter.brands.includes(item.name) ? "selected" : "sorting_but"
              }
              key={item._id}
              id={item.name}
              onClick={onClick}
            >
              {item.name}
            </button>
          ))}
        <button onClick={handleToggleShow} className="toggle_button">
          {showAll ? "(Hide)" : "(Show everything)"}
        </button>
      </div>
    </div>
  );
};

export default SortingBrands;
