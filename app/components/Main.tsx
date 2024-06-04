"use client";
import React, { useState } from "react";
import CatalogChanger from "./CatalogChanger";
import Image from "next/image";
import Carousel from "./Carousel";
import Loader from "./Loader";
import { useRequest } from "../hooks/useRequest";
import "../globals.css";

const Main = () => {
  const { data, isError, isLoading } = useRequest("products");
  const [options, setOptios] = useState(true);
  if (isError) {
    console.log("Error");
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="body_underwrapper">
      <CatalogChanger value={options} setOption={setOptios} />
      <Carousel
        container="carousel-container-main"
        slide="slides-main"
        block="container-tittle-hidden"
        carouselblock="carousel-main"
        prods={options === true ? data : data}
      />
      <Image
        className="koma_logo_home"
        src="/coma_big.png"
        width={1712}
        height={640}
        alt="Coma_logo_big"
        priority
      ></Image>
      <Image
        className="koma_logo_mobile"
        alt="koma_logo_mobile"
        src="/koma_logo_mobile.png"
        width={430}
        height={150}
        priority
      ></Image>
    </div>
  );
};

export default Main;
