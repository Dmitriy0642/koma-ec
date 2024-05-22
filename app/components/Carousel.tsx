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
  if (isError) {
    throw new Error("Error");
  }

  return (
    <div className="carousel-container">
      <div className="carousel">
        {data &&
          data.map(
            (item: {
              _id: string;
              color: string;
              firm: string;
              image: string[];
              name: string;
              price: number;
              sizes: object[];
              status: boolean;
            }) => (
              <div className="slide" key={item._id}>
                <Image
                  src={item.image[0]}
                  className="slides"
                  width={132}
                  height={132}
                  alt={item.name}
                  priority
                ></Image>
              </div>
            )
          )}
      </div>
    </div>
  );
};
export default Carousel;
