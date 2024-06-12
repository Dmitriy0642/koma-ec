"use client";
import React, { useState } from "react";
import { useRequestById } from "../hooks/useRequestById";
import { ProductProps } from "../types/Product";
import Loader from "./Loader";
import Description from "./Description";
import Carousel from "./Carousel";
import Image from "next/image";
import "../styles/product.css";

interface ProductPropsI {
  id: string;
  prods: ProductProps[];
}

const Product: React.FC<ProductPropsI> = ({ id, prods }) => {
  const { data, isLoading, isError } = useRequestById("products", `${id}`);
  const [isSelected, setSelected] = useState("");
  if (isLoading || prods === undefined) {
    return <Loader />;
  }
  if (isError) {
    console.log(isError);
  }

  const handleClick = (id: string) => {
    setSelected(id);
  };

  return (
    <div className="wrapper_product">
      <p className="title_routing">Головна / Каталог / {data.name}</p>
      <div className="wrapper_conext">
        <div className="conext">
          <div className="carousel_product">
            {data.image.map((item: string) => (
              <Image
                key={item}
                src={item}
                alt="product_pic"
                width={530}
                height={665}
                className="slides_prod"
                priority
              ></Image>
            ))}
          </div>
          <div className="navbar_product">
            <h2 className="nameofprod">{data.name}</h2>
            <h2 className="color_prod">
              color:
              <p className="color_prod_color"> {data.color}</p>
            </h2>
            <div className="sizes_block">
              <p className="title_size">size:</p>
              {data.sizes.map((item: { size: string }) => (
                <button
                  key={item.size}
                  id={item.size}
                  onClick={(e) => handleClick(e.currentTarget.id)}
                  className={
                    isSelected.includes(`${item.size}`)
                      ? "button_size_active"
                      : "button_size"
                  }
                >
                  {item.size}
                </button>
              ))}
            </div>
            <p className="price_of_prod">{data.price} UAN / 170$</p>
            <button className="add_to_bascet">Додати до кошика</button>
          </div>
          <div className="line"></div>
          <Description />
          <div className="line"></div>
          <div className="block_with_carousel">
            <Carousel
              container="carousel-container_xl"
              slide="slides_xl"
              block="conatiner-title"
              carouselblock="carousel"
              prods={prods}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
