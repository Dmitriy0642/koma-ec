"use client";
import React, { useEffect, useState } from "react";
import { getCookieValue } from "../util/cookiesMatcher";
import { useRequestByIdCart } from "../hooks/useRequestById";
import "../styles/header.css";

const CartToggle: React.FC = () => {
  const [isUserId, setIsUserId] = useState("");
  const { data, isError, isLoading } = useRequestByIdCart(
    "cart",
    `${isUserId}`
  );
  console.log(data);

  useEffect(() => {
    const userId = getCookieValue();
    if (userId) {
      setIsUserId(userId);
      console.log(isUserId);
    }
    console.log(isUserId);
  }, [isUserId]);

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
