"use client";
import React from "react";
import Image from "next/image";
import Carousel from "./Carousel";
import { useRequest } from "../hooks/useRequest";
import Loader from "./Loader";
import List from "./List";
import LatestArrivals from "./LatestArrivals";
import "../styles/brands.css";

const Brands = () => {
  const { data, isLoading, isError } = useRequest("products");

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    console.log(isError);
  }

  return (
    <>
      <div className="wrapper_brands">
        <List />
        <section className="image_block">
          <Image
            src="/siLogo.png"
            width={231}
            height={83}
            alt="logo_si"
            className="logo_product"
            priority
          ></Image>
          <Image
            src="/StoneIslandGarmentDyedSweatshirtWhite1.webp"
            width={864}
            height={1047}
            className="product_image"
            alt="product_image"
            priority
          ></Image>
          <p className="text_selected">go to catalog</p>
        </section>
      </div>
      <div className="carousel-block">
        <Carousel
          container="carousel-container_xl"
          slide="slides_xl"
          block="conatiner-title"
          carouselblock="carousel"
          prods={data}
        />
      </div>
      <LatestArrivals />
    </>
  );
};

export default Brands;
