import React from "react";
import "../styles/header.css";
import MenuToggle from "./MenuToggle";
import Image from "next/image";
import Translator from "./Translator";
import CartToggle from "./CartToggle";
export default function Header() {
  return (
    <header className="wrapper_header">
      <MenuToggle />
      <Image
        className="coma_small_logo"
        src="/coma_small.png"
        width={22}
        height={40}
        alt="coma_logo"
      ></Image>
      <div className="second_part">
        <Translator />
        <CartToggle />
      </div>
    </header>
  );
}
