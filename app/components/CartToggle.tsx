"use client";
import React from "react";
import { useRequest } from "../hooks/useRequest";
import "../styles/header.css";

const CartToggle: React.FC = () => {
  const { data, isLoading, isError } = useRequest("cart");

  const onClick = () => {
    const element = document.querySelector(
      ".wrapper_buregercart"
    ) as HTMLElement | null;
    if (element) {
      element.style.display = "block";
    }
  };

  if (isLoading) {
  }

  if (isError) {
    console.log(isError);
  }

  return (
    <div>
      <h2 className="cart_title" onClick={onClick}>
        Cart(
        {data === undefined || !data.items || data.message
          ? 0
          : data.items.length}
        )
      </h2>
    </div>
  );
};
export default CartToggle;
