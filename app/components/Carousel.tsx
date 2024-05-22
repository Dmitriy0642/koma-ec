"use client";
import React from "react";
import axios from "axios";
import CarouselItem from "./CarouselItem";
import { BASE_URL } from "../config";
import { useQuery } from "@tanstack/react-query";
import "../styles/carousel.css";

export const fetchProducts = async () => {
  const { data } = await axios.get(`${BASE_URL}firms`);
  return data;
};

const Carousel: React.FC = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["someKey"],
    queryFn: fetchProducts,
  });
  console.log(data);

  return (
    <div className="carousel-container">
      <div className="carousel">{/* <CarouselItem data={element} /> */}</div>
    </div>
  );
};
export default Carousel;
