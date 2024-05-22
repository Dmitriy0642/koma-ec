"use client";
import React from "react";
import { useRequest } from "../hooks/useRequest";
import Image from "next/image";
import "../styles/carousel.css";
import Loader from "./Loader";

const Carousel: React.FC = () => {
  const { data, isLoading, isError } = useRequest("products");
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="carousel-container">
      <div className="carousel">
        {/* {d.data.map((item: object[]) => (
          <div className="slide" key={item.name}>
            <Image
              src={item.image[0]}
              className="slides"
              width={132}
              height={132}
              alt={item}
            ></Image>
          </div>
        ))} */}
      </div>
    </div>
  );
};
export default Carousel;
