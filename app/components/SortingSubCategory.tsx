"use client";
import React from "react";
import { useRequest } from "../hooks/useRequest";
import Loader from "./Loader";
import "../styles/sorting.css";

const SortingSubCategory: React.FC<onClickProps> = ({ onClick, filter }) => {
  const { data, isLoading, isError } = useRequest("subcategory");

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="sort_block">
      <h3 className="title_sort">Subcategory</h3>
      <div>
        {data.map((item: { _id: string; name: string }) => (
          <button
            className={
              filter.subcategory.includes(item.name)
                ? "selected"
                : "sorting_but"
            }
            key={item._id}
            id={item.name}
            onClick={onClick}
          >
            {item.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SortingSubCategory;
