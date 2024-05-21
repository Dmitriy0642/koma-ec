import Image from "next/image";
import "../styles/carousel.css";
export default function CarouselItem(element: any) {
  const data = element.data;
  return (
    <>
      {data.map((item: any) => (
        <div className="slide" key={item.name}>
          <Image
            src={item.image[0]}
            className="slides"
            width={132}
            height={132}
            alt={item}
          ></Image>
        </div>
      ))}
    </>
  );
}
