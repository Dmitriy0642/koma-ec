import React, { useState } from "react";
import Image from "next/image";
import { ProductProps } from "../types/Product";
import "../styles/carousel.css";

interface CarouselProps {
  slide: string;
  container: string;
  block: string;
  carouselblock: string;
  prods: ProductProps[];
}

const Carousel: React.FC<CarouselProps> = ({
  slide,
  container,
  block,
  carouselblock,
  prods,
}) => {
  const [hoverIndex, setHoverIndex] = useState<string | null>(null);
  return (
    <div className={container}>
      <div className={block}>
        <p className="title_last_arrivals">Latest arrivals</p>
        <p className="view_catalog_tittle">view catalog</p>
      </div>
      <div className={carouselblock}>
        {prods &&
          prods.map((item, index) => (
            <div className="slide" key={item._id}>
              <Image
                onMouseEnter={() => setHoverIndex(item._id)}
                onMouseLeave={() => setHoverIndex(null)}
                src={item.image[0]}
                className={slide}
                width={132}
                height={132}
                alt={item.name}
                priority
              ></Image>
            </div>
          ))}
      </div>
    </div>
  );
};
export default Carousel;
