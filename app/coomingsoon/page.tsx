import Image from "next/image";
import "../styles/comingsoon.css";

export default function Home() {
  return (
    <main className="wrapper_coming_soon">
      <div className="picture_block">
        <Image
          priority
          alt="coma_logo"
          src="/coma_big.png"
          width={107}
          height={37}
          className="logo_coma"
        ></Image>
      </div>
      <div className="logo_coming_soon">
        <h2 className="picture_coming">coming soon</h2>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </main>
  );
}
