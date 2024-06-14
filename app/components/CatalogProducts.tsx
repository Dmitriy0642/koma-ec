"use client";
import React from "react";
import Loader from "./Loader";
import Image from "next/image";
import { ProductProps } from "../types/Product";
import { useRouter } from "next/navigation";
import "../styles/catalogproducts.css";

interface PropsProductsCatalog {
  products: ProductProps[];
}

const CatalogProducts: React.FC<PropsProductsCatalog> = ({ products }) => {
  const router = useRouter();
  if (!products) {
    return <Loader />;
  }

  const onClick = (id: string) => {
    const currentPath = window.location.pathname;
    const newPath = `/catalog/${id}`;

    if (currentPath !== newPath) {
      router.push(newPath);
    }
  };
  return (
    <div className="product_container">
      {products.map((item) => (
        <div className="wrapper_pic" key={item._id}>
          <Image
            onClick={() => onClick(item._id)}
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
      ))}
    </div>
  );
};

export default CatalogProducts;
