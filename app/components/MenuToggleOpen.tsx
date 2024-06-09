"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../styles/menu.css";

const MenuToggleOpen: React.FC = () => {
  const onClick = () => {
    const element = document.querySelector(
      ".burgermenu_bar"
    ) as HTMLElement | null;
    if (element) {
      element.style.display = "none";
    }
  };
  return (
    <div className="burgermenu_bar">
      <section className="burgermenu_wrapper">
        <section className="header_burger_menu">
          <section className="close_menu" onClick={onClick}>
            <Image
              src="/cross.png"
              width={14}
              height={14}
              priority
              alt="cross"
            ></Image>
          </section>
          <section className="title_burger">menu</section>
          <Image
            src="/coma_smal_white.png"
            className="koma_logo_white"
            width={20}
            height={40}
            priority
            alt="komasmalllogo"
          ></Image>
        </section>
        <section className="list">
          <ul className="list_of_actions">
            <li className="list_item">
              <Link href="/">home</Link>
            </li>
            <li className="list_item">
              <Link href="/catalog">catalog</Link>
            </li>
            <li className="list_item">sale</li>
            <li className="list_item">brands</li>
            <li className="list_item">
              <Link className="list_item" href="/careofclothes">
                care of clothes
              </Link>
            </li>
            <li className="list_item">
              <Link className="list_item" href="/paymentdelivery">
                payment & delivery
              </Link>
            </li>
            <li className="list_item">about us</li>
            <li className="list_item">
              <Link href="/contacts">contacts</Link>
            </li>
          </ul>
        </section>
      </section>
    </div>
  );
};
export default MenuToggleOpen;
