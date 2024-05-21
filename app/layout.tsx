import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import MenuToggleOpen from "./components/MenuToggleOpen";
const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <Header />
        <MenuToggleOpen />
        {children}
      </body>
    </html>
  );
}
