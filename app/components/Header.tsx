import React from "react";
import MenuToggle from "./MenuToggle";
import Image from "next/image";
import CartToggle from "./CartToggle";
import "../styles/header.css";
export default function Header() {
  return (
    <header className="wrapper_header">
      <div className="underwrapper_header">
        <MenuToggle />
        <Image
          className="coma_small_logo"
          src="/coma_small.png"
          width={22}
          height={40}
          alt="coma_logo"
          priority
        ></Image>
        <CartToggle />
      </div>
    </header>
  );
}
