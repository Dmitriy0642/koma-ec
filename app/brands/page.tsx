import Carousel from "../components/Carousel";
import "../styles/brands.css";
import Image from "next/image";
export default function Home() {
  return (
    <main className="main_wrapper">
      <div className="wrapper_brands">
        <section className="list_block">
          <section className="list_first">
            <ul>
              <li className="item_firm">stone island</li>
              <li className="item_firm">CP company</li>
              <li className="item_firm">carhartt</li>
              <li className="item_firm">stussy</li>
              <li className="item_firm">new balance</li>
              <li className="item_firm">salomon</li>
              <li className="item_firm">nike</li>
              <li className="item_firm">the north face</li>
              <li className="item_firm">dime</li>
              <li className="item_firm">heron preston</li>
              <li className="item_firm">a cold wall</li>
              <li className="item_firm">essentials fear of god</li>
              <li className="item_firm">palm angels</li>
              <li className="item_firm">represent</li>
              <li className="item_firm">vans</li>
            </ul>
          </section>
          <section className="list_second">
            <ul>
              <li className="item_firm">dime</li>
              <li className="item_firm">obey</li>
              <li className="item_firm">supreme</li>
              <li className="item_firm">pleassures</li>
              <li className="item_firm">fuking awesome</li>
              <li className="item_firm">palace</li>
              <li className="item_firm">dickies</li>
              <li className="item_firm">arcteryx</li>
              <li className="item_firm">nike ach</li>
              <li className="item_firm">Hoka</li>
              <li className="item_firm">roa</li>
              <li className="item_firm">asics</li>
              <li className="item_firm">ami</li>
              <li className="item_firm">mastrum</li>
              <li className="item_firm">bape</li>
            </ul>
          </section>
        </section>
        <section className="image_block">
          <Image
            src="/siLogo.png"
            width={231}
            height={83}
            alt="logo_si"
            className="logo_product"
            priority
          ></Image>
          <Image
            src="/StoneIslandGarmentDyedSweatshirtWhite1.webp"
            width={864}
            height={1047}
            className="product_image"
            alt="product_image"
            priority
          ></Image>
        </section>
      </div>
      <div className="carousel-block">
        <Carousel
          container="carousel-container_xl"
          slide="slides_xl"
          block="conatiner-title"
        />
      </div>
    </main>
  );
}
