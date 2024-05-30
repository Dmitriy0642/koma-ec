"use client";
import React from "react";
import { useRequest } from "../hooks/useRequest";
import Loader from "./Loader";
import Image from "next/image";
import "../styles/catalogproducts.css";

const CatalogProducts: React.FC = () => {
  const { data, isLoading, isError } = useRequest("products");

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="product_container">
      {data.map(
        (item: {
          category: string;
          color: string;
          name: string;
          firm: string;
          image: string[];
          price: number;
          sizes: [object];
          status: boolean;
          _id: string;
        }) => (
          <div key={item._id}>
            <Image
              src={item.image[0]}
              alt={item.name}
              width={397}
              height={513}
              className="card_product"
            ></Image>
            <section className="block_description">
              <p className="product_name">{item.name}</p>
              <p className="product_price">{item.price} UAN</p>
            </section>
            <section className="block_sizes"></section>
          </div>
        )
      )}
    </div>
  );
};

export default CatalogProducts;
