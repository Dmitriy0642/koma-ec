"use client";
import React from "react";
import Image from "next/image";
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
      <section className="header_burger_menu">
        <section className="close_menu" onClick={onClick}>
          <Image
            src="/cross.png"
            width={20}
            height={20}
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
          <li className="list_item">for her</li>
          <li className="list_item">for his</li>
          <li className="list_item">brands</li>
          <li className="list_item">payment & delivery</li>
          <li className="list_item">about us</li>
          <li className="list_item">contacts</li>
        </ul>
      </section>
    </div>
  );
};
export default MenuToggleOpen;
