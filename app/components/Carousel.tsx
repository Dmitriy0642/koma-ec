import axios from "axios";
import CarouselItem from "./CarouselItem";
import "../styles/carousel.css";
export async function getCarouselElements() {
  const uri = "http://localhost:3000/api/products";
  const api = await axios.get(uri);
  const data = api.data;
  return data;
}

export default async function Carousel() {
  const element = await getCarouselElements();

  return (
    <div className="carousel-container">
      <div className="carousel">{/* <CarouselItem data={element} /> */}</div>
    </div>
  );
}
