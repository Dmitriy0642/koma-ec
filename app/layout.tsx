import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";
import MenuToggleOpen from "./components/MenuToggleOpen";
import CartToggleOpen from "./components/CartToggleOpen";
import Provider from "./Provider";
import { Toaster } from "sonner";
import "./globals.css";

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
        <Provider>
          <MenuToggleOpen />
          <CartToggleOpen />
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                position: "fixed",
                top: "20px",
                right: "20px",
              },
            }}
          />
        </Provider>
      </body>
    </html>
  );
}
