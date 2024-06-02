"use client";
import React from "react";
import { useRequest } from "../hooks/useRequest";
import Loader from "./Loader";
import "../styles/sorting.css";

const SortingCategory: React.FC<onClickProps> = ({ onClick, filter }) => {
  const { data, isError, isLoading } = useRequest("category");

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="sort_block">
      <h3 className="title_sort">Category</h3>
      <div className="block_sort_buttons">
        {data.map((item: { _id: string; name: string }) => (
          <button
            className={
              filter.category.includes(item.name) ? "selected" : "sorting_but"
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

export default SortingCategory;
