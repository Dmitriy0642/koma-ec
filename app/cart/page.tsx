"use client";
import React, { useState, ChangeEvent, useEffect } from "react";
import Image from "next/image";
import TextArea from "../components/TextArea";
import { getCookieValue } from "../util/cookiesMatcher";
import { useRequestById } from "../hooks/useRequestById";
import { useRequestDelete } from "../hooks/useRequestPost";
import ButtonsInCart from "../components/ButtonsInCart";
import Loader from "../components/Loader";
import "../styles/cart.css";

const Cart: React.FC = () => {
  const [isDescription, setIsDescription] = useState("");
  const [isUserId, setIsUserId] = useState("");
  const [isGeneralAmount, setIsGeneralAmount] = useState(0);
  const [isSelected, setIsSelected] = useState("");
  const { data, isError, isLoading } = useRequestById("cart", `${isUserId}`);
  const { mutate } = useRequestDelete("cart", isUserId, isSelected);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setIsDescription(e.target.value);
  };

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

  useEffect(() => {
    if (isSelected.length > 0) {
      mutate();
    }
  }, [isSelected]);

  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    console.log(isError);
  }

  const onDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    const prodId = e.currentTarget.id;
    try {
      setIsSelected(prodId);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main_warp">
      {data.message || data.items.length === 0 ? (
        <h1>Your cart is empty</h1>
      ) : (
        <>
          <p className="routing_in_cart">головна / кошик</p>
          <h1 className="title_in_cart">Кошик</h1>
          <div className="underwapper">
            <div className="block_prod_cart">
              <div className="line"></div>
              {data.items.map((item: CartItem) => (
                <div key={item._id} className="item_product">
                  <Image
                    src={item.image[0]}
                    width={119}
                    height={119}
                    alt="product_item"
                    className="prod_images"
                    priority
                  ></Image>
                  <div className="product_description_body">
                    <div className="first_line_description">
                      <p className="item_name">{item.name}</p>
                      <button
                        className="delete_button_in_cart"
                        id={item.prodId}
                        onClick={onDelete}
                      >
                        Видалити
                      </button>
                    </div>
                    <div className="sizes_block_in_cart">
                      <ButtonsInCart
                        sizes={item.sizes}
                        price={item.price}
                        prodId={item.prodId}
                      />
                    </div>
                  </div>
                </div>
              ))}
              <div className="line"></div>
            </div>

            <div className="order_block">
              <div className="line_order_block"></div>
              <div className="block_final_amount">
                <p className="title_receipt">Проміжний підсумок:</p>
                <p className="title_summ">{isGeneralAmount} ГРН</p>
              </div>
              <div className="line_order_block"></div>
              <div className="block_final_delivery">
                <p className="title_delivery">Доставка:</p>
                <p className="title_post">
                  НОВА ПОШТА *за тарифами перевізника
                </p>
              </div>
              <div className="line_order_block"></div>
              <div className="amount_in_general">
                <p className="title_in_general">Всього:</p>
                <p className="final_amount">{isGeneralAmount} ГРН</p>
              </div>
              <TextArea
                name="notice"
                placeholder="Нотатки до вашого замовлення, наприклад, спеціальні уточнення для доставки"
                label="Нотатки до замовлення"
                value={isDescription}
                onChange={handleChange}
              />
              <div className="checkout_block">
                <button className="go_to_checkout">
                  Перейти до оформлення замовлення
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
