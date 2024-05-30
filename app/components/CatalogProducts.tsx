"use client";
import React from "react";
import Loader from "./Loader";
import Image from "next/image";
import { ProductProps } from "../types/Product";
import "../styles/catalogproducts.css";

interface PropsProductsCatalog {
  products: ProductProps[];
}

const CatalogProducts: React.FC<PropsProductsCatalog> = ({ products }) => {
  if (!products) {
    return <Loader />;
  }

  return (
    <>
      <div className="product_container">
        {products.map(
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
    </>
  );
};

export default CatalogProducts;
