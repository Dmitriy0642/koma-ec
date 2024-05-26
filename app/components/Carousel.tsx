"use client";
import React from "react";
import { useRequest } from "../hooks/useRequest";
import Image from "next/image";
import "../styles/carousel.css";
import Loader from "./Loader";

interface CarouselProps {
  slide: string;
  container: string;
  block: string;
  carouselblock: string;
}

const Carousel: React.FC<CarouselProps> = ({
  slide,
  container,
  block,
  carouselblock,
}) => {
  const { data, isLoading, isError } = useRequest("products");
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    console.log(isError);
  }

  return (
    <div className={container}>
      <div className={block}>
        <p className="title_last_arrivals">Latest arrivals</p>
        <p className="view_catalog_tittle">view catalog</p>
      </div>
      <div className={carouselblock}>
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
                  className={slide}
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
