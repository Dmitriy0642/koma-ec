"use client";
import React from "react";

const MenuToggle: React.FC = () => {
  const oncLick = () => {
    const element = document.querySelector(
      ".burgermenu_bar"
    ) as HTMLElement | null;
    if (element) {
      element.style.display = "block";
    }
  };
  return (
    <div>
      <h2 className="menu_title" onClick={oncLick}>
        Menu
      </h2>
    </div>
  );
};

export default MenuToggle;
