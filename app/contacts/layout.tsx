import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "../components/Footer";
import Header from "../components/Header";
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
    <div className={inter.className}>
      {children}
      <Footer />
    </div>
  );
}
