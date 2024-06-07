import "../app/globals.css";
import Main from "./components/Main";
import Brands from "./components/Brands";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="body_wrapper">
      <Main />
      <Brands />
      <Footer />
    </main>
  );
}
