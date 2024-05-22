import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import MenuToggleOpen from "./components/MenuToggleOpen";
import CartToggleOpen from "./components/CartToggleOpen";
import Provider from "./Provider";
import CatalogChanger from "./components/CatalogChanger";

export const metadata: Metadata = {
  title: "Koma concept store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <MenuToggleOpen />
        <CartToggleOpen />
        <CatalogChanger />
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
