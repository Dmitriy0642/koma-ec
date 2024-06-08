"use client";
import React from "react";
import Image from "next/image";
import "../styles/menu.css";
const CartToggleOpen: React.FC = () => {
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
        <section className="product_block">
          <Image
            src="/image.png"
            width={100}
            height={100}
            priority
            alt="product_picture"
          ></Image>
          <section className="first_block">
            <p className="name_of_product">
              Garhartt WIP OG Chore Chromc Coat "Dearborn" Canvas
            </p>
            <p className="product_size">Size:M</p>
            <section className="button_block">
              <button className="button_plus">+</button>
              <p className="product_amount">0</p>
              <button className="button_minus">-</button>
            </section>
          </section>
          <section className="second_block">
            <button className="button_delete_product">Delete</button>
            <p className="product_anmout">6 999 UAH</p>
          </section>
        </section>
        <section className="payment_block">
          <section className="left_part">
            <h2 className="title_total">total:</h2>
            <p className="expression_shipping">Amount include shipping</p>
          </section>
          <section className="right_part">
            <h2 className="amount_price">6 999 UAH</h2>
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
