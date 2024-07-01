"use client";
import React, { useEffect, useState } from "react";
import { getCookieValue } from "../util/cookiesMatcher";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "../config";
import axios from "axios";
import "../styles/header.css";

const CartToggle: React.FC = () => {
  const [isUserId, setIsUserId] = useState("");
  const fetchDataCart = async () => {
    const { data } = await axios.get(`${BASE_URL}/cart/${isUserId}`);
    return data;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: [`cart/${isUserId}`],
    queryFn: fetchDataCart,
    enabled: !!isUserId,
  });

  useEffect(() => {
    const userId = getCookieValue();
    if (userId) {
      console.log(userId);

      setIsUserId(userId);
    }
  }, []);

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
