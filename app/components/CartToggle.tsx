"use client";
import React from "react";
import "../styles/header.css";

const CartToggle: React.FC = () => {
  const onClick = () => {
    const element = document.querySelector(
      ".wrapper_buregercart"
    ) as HTMLElement | null;
    if (element) {
      element.style.display = "block";
    }
  };
  return (
    <div>
      <h2 className="cart_title" onClick={onClick}>
        Cart
      </h2>
    </div>
  );
};
export default CartToggle;
