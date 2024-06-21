"use client";
import React from "react";
import { useRequest } from "../hooks/useRequest";
import Image from "next/image";
import Loader from "./Loader";
import { useRouter } from "next/navigation";
import "../styles/latestarrivals.css";

const LatestArrivals: React.FC = () => {
  const { data, isLoading, isError } = useRequest("products");

  if (isLoading) {
    return <Loader />;
  }

  const router = useRouter();
  const onClick = (id: string) => {
    const currentPath = window.location.pathname;
    const newPath = `/catalog/${id}`;

    if (currentPath !== newPath) {
      router.push(newPath);
    }
  };
  return (
    <div className="carousel">
      <div className="carousel-track">
        {data.map((item: any, index: number) => (
          <div
            key={item._id}
            className={`carousel-item ${index % 3 === 2 ? "large" : "small"}`}
          >
            <Image
              onClick={() => onClick(item._id)}
              className={`item ${index % 3 === 2 ? "large" : "small"}`}
              src={item.image[0]}
              width={index % 3 === 2 ? 414 : 203}
              height={index % 3 === 2 ? 535 : 260}
              alt={item._id}
            />
            <h2 className={`prod_name ${item % 3 === 2 ? "large" : "small"}`}>
              {item.name}
            </h2>
            <p className={`price ${item % 3 === 2 ? "large" : "small"}`}>
              {item.price} UAH
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestArrivals;
