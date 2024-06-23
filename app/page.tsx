import "../app/globals.css";
import Main from "./components/Main";
import Brands from "./components/Brands";
import Footer from "./components/Footer";
import CookieWindow from "./components/CookieWindow";

export default function Home() {
  return (
    <main className="body_wrapper">
      <CookieWindow />
      <Main />
      <Brands />
      <Footer />
    </main>
  );
}
