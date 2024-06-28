"use client";
import React, { useState, useEffect } from "react";
import { getCookieValue } from "../util/cookiesMatcher";
import { useRequestPatch } from "../hooks/useRequestPost";

interface ButtonsInCartI {
  sizes: SizeWithQuantity[];
  price: number;
  prodId: string;
}

const ButtonsInCart: React.FC<ButtonsInCartI> = ({ sizes, price, prodId }) => {
  const [isUserId, setIsUserId] = useState("");
  const { mutate } = useRequestPatch("cart", isUserId);
  const changeSize = (
    prodId: string,
    size: string,
    action: "increment" | "decrement"
  ) => {
    mutate({ prodId, size, action });
  };

  useEffect(() => {
    const userId = getCookieValue();
    if (userId) {
      setIsUserId(userId);
    }
  }, []);

  return (
    <div className="container_sizes_block">
      {sizes.map((size: { size: string; value: number }) => (
        <div className="button_and_size_block" key={size.size}>
          <div className="buttons_block">
            <button
              className="minus"
              onClick={() => changeSize(prodId, size.size, "decrement")}
            >
              -
            </button>
            <p className="value_of_size">{size.value}</p>
            <button
              className="plus"
              onClick={() => changeSize(prodId, size.size, "increment")}
            >
              +
            </button>
          </div>
          <p className="size_label">Розмiр:{size.size}</p>
        </div>
      ))}
      {
        <div className="price_block_in_cart">
          <p className="title_price_in_cart">{price} UAN</p>
        </div>
      }
    </div>
  );
};

export default ButtonsInCart;
