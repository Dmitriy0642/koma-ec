"use client";
import React from "react";
import { useRequest } from "../hooks/useRequest";
import Loader from "./Loader";
import "../styles/sorting.css";

const SortingBrands: React.FC<onClickProps> = ({ onClick }) => {
  const { data, isLoading, isError } = useRequest("brands");

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="sort_block">
      <h3 className="title_sort">Brand</h3>
      <div>
        {data.map((item: { _id: string; name: string }) => (
          <button
            className="sorting_but"
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

export default SortingBrands;
