"use client";
import React, { useEffect, useState } from "react";
import { getCookieValue } from "../util/cookiesMatcher";
import { useRequestById } from "../hooks/useRequestById";
import "../styles/header.css";
import Loader from "./Loader";

const CartToggle: React.FC = () => {
  const [isUserId, setIsUserId] = useState("");
  const [itemsInCart, setItemsInCart] = useState(0);
  const { data, isError, isLoading } = useRequestById("cart", `${isUserId}`);

  useEffect(() => {
    if (data && data.items) {
      setItemsInCart(data.items.length);
    }
    const userId = getCookieValue();
    if (userId) {
      setIsUserId(userId);
    }
  }, [data]);

  const onClick = () => {
    const element = document.querySelector(
      ".wrapper_buregercart"
    ) as HTMLElement | null;
    if (element) {
      element.style.display = "block";
    }
  };

  if (isLoading) {
    return isLoading;
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
