"use client";
import React, { useEffect, useState } from "react";
import { getCookieValue } from "../util/cookiesMatcher";
import { useRequestById } from "../hooks/useRequestById";
import "../styles/header.css";
import Loader from "./Loader";

const CartToggle: React.FC = () => {
  const [isUserId, setIsUserId] = useState("");
  const [itemsInCart, setItemsInCart] = useState();
  useEffect(() => {
    const userId = getCookieValue();
    if (userId) {
      setIsUserId(userId);
    }
  }, []);

  const { data, isError, isLoading } = useRequestById("cart", `${isUserId}`);

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
