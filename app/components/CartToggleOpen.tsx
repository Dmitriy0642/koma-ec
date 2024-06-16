"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getCookieValue } from "../util/cookiesMatcher";
import { useRequestById } from "../hooks/useRequestById";
import Loader from "./Loader";
import "../styles/menu.css";

const CartToggleOpen: React.FC = () => {
  const userId = getCookieValue("userId");
  const { data, isError, isLoading } = useRequestById("cart", `${userId}`);
  const [isGeneralAmount, setIsGeneralAmount] = useState(0);
  useEffect(() => {
    if (data && data.items) {
      const totalAmount = data.items.reduce((sum: number, item: CartItem) => {
        const itemTotal = item.sizes.reduce(
          (itemSum: number, size: SizeWithQuantity) =>
            itemSum + item.price * size.value,
          0
        );

        return sum + itemTotal;
      }, 0);

      setIsGeneralAmount(totalAmount);
    }
  }, [data]);
  if (isLoading) {
    return <Loader />;
  }
  console.log(isGeneralAmount);

  const onClick = () => {
    const element = document.querySelector(
      ".wrapper_buregercart"
    ) as HTMLElement | null;
    if (element) {
      element.style.display = "none";
    }
  };

  return (
    <div className="wrapper_buregercart">
      <section className="burgercart_block">
        <section className="burgercart_header">
          <section className="title_cart">your cart</section>
          <Image
            src="/coma_smal_white.png"
            className="koma_logo_white_cart"
            width={20}
            height={40}
            priority
            alt="komasmalllogo"
          ></Image>
          <section className="close_block" onClick={onClick}>
            <Image
              src="/cross.png"
              width={14}
              height={14}
              priority
              alt="cross"
              className="close_button"
            ></Image>
          </section>
        </section>
        {data.items.map((item: CartItem) => (
          <div key={item._id}>
            <section className="product_block">
              <Image
                className="picture_prod_in_cart"
                src={item.image[0]}
                width={100}
                height={100}
                priority
                alt="product_picture"
              ></Image>
              <section className="first_block">
                <p className="name_of_product">{item.name}</p>
                <div className="block_with_sizes" key={item.name}>
                  {item.sizes.map((elem: any) => (
                    <p className="product_size" key={elem.size}>
                      {elem.size}
                    </p>
                  ))}
                </div>
              </section>
              <section className="second_block">
                <button className="button_delete_product">Delete</button>
                <p className="product_anmout">{item.price} UAH</p>
              </section>
            </section>
          </div>
        ))}
        <section className="payment_block">
          <section className="left_part">
            <h2 className="title_total">total:</h2>
            <p className="expression_shipping">Amount include shipping</p>
          </section>
          <section className="right_part">
            <h2 className="amount_price">{isGeneralAmount} UAH</h2>
          </section>
        </section>
        <section className="checkout_block">
          <button className="button_checkout">
            checkout
            <Image
              src="/arrow_small.png"
              className="arrow_in_button_submit"
              width={18.33}
              height={11}
              alt="arrow_small"
              priority
            ></Image>
          </button>
        </section>
      </section>
    </div>
  );
};

export default CartToggleOpen;
