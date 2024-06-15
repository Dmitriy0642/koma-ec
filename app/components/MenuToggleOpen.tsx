"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRequest } from "../hooks/useRequest";
import Loader from "./Loader";
import "../styles/menu.css";

const MenuToggleOpen: React.FC = () => {
  const { data, isLoading, isError } = useRequest("links");

  if (isLoading) {
    return <Loader />;
  }

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
            {data.map((item: { _id: string; name: string; href: string }) => (
              <li className="list_item" key={item._id}>
                <Link onClick={onClick} className="link_href" href={item.href}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </div>
  );
};
export default MenuToggleOpen;
