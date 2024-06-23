"use client";
import React, { useState, useEffect } from "react";
import { getCookieValue } from "../util/cookiesMatcher";
import { useRequestPost } from "../hooks/useRequestPost";

interface ButtonsInCartI {
  sizes: SizeWithQuantity[];
  price: number;
}

const ButtonsInCart: React.FC<ButtonsInCartI> = ({ sizes, price }) => {
  return (
    <>
      {sizes.map((size: { size: string; value: number }) => (
        <div className="button_and_size_block" key={size.size}>
          <div className="buttons_block">
            <button className="minus">-</button>
            <p className="value_of_size">{size.value}</p>
            <button className="plus">+</button>
          </div>
          <p className="size_label">Розмiр:{size.size}</p>
        </div>
      ))}
      {
        <div className="price_block_in_cart">
          <p className="title_price_in_cart">{price} UAN</p>
        </div>
      }
    </>
  );
};

export default ButtonsInCart;
