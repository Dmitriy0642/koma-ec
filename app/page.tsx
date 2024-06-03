import Image from "next/image";
import Carousel from "./components/Carousel";
import CatalogChanger from "./components/CatalogChanger";
import "../app/globals.css";

export default function Home() {
  return (
    <main className="body_wrapper">
      <div className="body_underwrapper">
        <CatalogChanger />
        <Carousel
          container="carousel-container-main"
          slide="slides-main"
          block="container-tittle-hidden"
          carouselblock="carousel-main"
        />
        <Image
          className="koma_logo_home"
          src="/coma_big.png"
          width={1712}
          height={640}
          alt="Coma_logo_big"
          priority
        ></Image>
        <Image
          className="koma_logo_mobile"
          alt="koma_logo_mobile"
          src="/koma_logo_mobile.png"
          width={430}
          height={150}
          priority
        ></Image>
      </div>
    </main>
  );
}
