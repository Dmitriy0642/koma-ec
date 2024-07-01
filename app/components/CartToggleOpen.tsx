"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getCookieValue } from "../util/cookiesMatcher";
import { useRequestByIdCart } from "../hooks/useRequestById";
import { useRequestDelete } from "../hooks/useRequestPost";
import { useRouter } from "next/navigation";
import Loader from "./Loader";
import "../styles/menu.css";

const CartToggleOpen: React.FC = () => {
  const [isUserId, setIsUserId] = useState("");
  const [isSelected, setIsSelected] = useState("");
  const { data, isError, isLoading } = useRequestByIdCart(
    "cart",
    `${isUserId}`
  );
  const router = useRouter();
  const { mutate } = useRequestDelete("cart", isUserId, isSelected);
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
    const userId = getCookieValue();
    if (userId) {
      setIsUserId(userId);
    }
  }, [data]);

  if (isLoading) {
    return <Loader />;
  }

  const onClick = () => {
    const element = document.querySelector(
      ".wrapper_buregercart"
    ) as HTMLElement | null;
    if (element) {
      element.style.display = "none";
    }
  };

  const onDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    const prodId = e.currentTarget.id;
    try {
      setIsSelected(prodId);
      mutate();
    } catch (error) {
      console.log(error);
    }
  };

  const onMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const path = "/cart";
    if (path) {
      const element = document.querySelector(
        ".wrapper_buregercart"
      ) as HTMLElement | null;
      if (element) {
        element.style.display = "none";
      }
    }
    router.push(path);
  };

  return (
    <div className="wrapper_buregercart">
      {data === undefined || !data.items || data.message ? (
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
            />
            <section className="close_block" onClick={onClick}>
              <Image
                src="/cross.png"
                width={14}
                height={14}
                priority
                alt="cross"
                className="close_button"
              />
            </section>
          </section>
          <section className="empty_block"></section>
          <section className="payment_block">
            <section className="left_part">
              <h2 className="title_total">total:</h2>
              <p className="expression_shipping">Amount include shipping</p>
            </section>
          </section>
          <section className="checkout_block"></section>
        </section>
      ) : (
        <>
          <section className="burgercart_header">
            <section className="title_cart">your cart</section>
            <Image
              src="/coma_smal_white.png"
              className="koma_logo_white_cart"
              width={20}
              height={40}
              priority
              alt="komasmalllogo"
            />
            <section className="close_block" onClick={onClick}>
              <Image
                src="/cross.png"
                width={14}
                height={14}
                priority
                alt="cross"
                className="close_button"
              />
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
                />
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
                  <button
                    className="button_delete_product"
                    id={item.prodId}
                    onClick={onDelete}
                  >
                    Delete
                  </button>
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
            <button className="button_checkout" onClick={onMove}>
              checkout
              <Image
                src="/arrow_small.png"
                className="arrow_in_button_submit"
                width={19}
                height={11}
                alt="arrow_small"
                priority
              />
            </button>
          </section>
        </>
      )}
    </div>
  );
};

export default CartToggleOpen;
