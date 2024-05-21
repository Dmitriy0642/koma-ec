import Image from "next/image";
import Carousel from "./components/Carousel";
export default function Home() {
  return (
    <main className="body_wrapper" style={{ marginTop: "275px" }}>
      <Carousel />
      <Image
        src="/coma_big.png"
        width={1712}
        height={640}
        alt="Coma_logo_big"
      ></Image>
    </main>
  );
}
