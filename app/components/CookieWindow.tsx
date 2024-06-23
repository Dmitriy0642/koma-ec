"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import "../styles/cookieswindow.css";
const CookieWindow = () => {
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const contest = localStorage.getItem("cookieConsent");
    if (!contest) {
      setIsVisible(false);
    }
  }, []);

  const handleAccept = (e: React.MouseEvent<HTMLButtonElement>) => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(true);
  };

  return (
    <div className="cookies_wrapper" hidden={isVisible}>
      <div className="cookies_header_block">
        <Image
          src="/cookies.png"
          width={24}
          height={24}
          alt="cookies_picture"
        ></Image>
        <h1 className="cookies_title">цей сайт використовує файли cookie</h1>
      </div>
      <div className="cookies_body">
        <p className="cookie_text">
          Ми та окремі треті сторони використовуємо файли cookie (або подібні
          технології) для технічних цілей, для покращення та аналізу
          використання сайту, для підтримки наших маркетингових зусиль та для
          інших цілей, описаних у нашій Політиці використання файлів Cookie.
        </p>
      </div>
      <div className="cookies_footer">
        <div className="cookies_button_block">
          <button className="setup_cookies">Налаштувати</button>
          <button className="accept_cookies" onClick={handleAccept}>
            прийняти все
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieWindow;
