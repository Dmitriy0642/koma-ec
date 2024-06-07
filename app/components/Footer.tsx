import Image from "next/image";
import "../styles/footer.css";
const Footer = () => {
  return (
    <footer className="footer_wrapper">
      <section className="footer_container">
        <section className="first_section">
          <Image
            src="/koma_logo_footer.png"
            width={258}
            height={89}
            alt="koma_small_logo"
            className="koma_logo_big"
          ></Image>
          <Image
            src="/coma_smal_white.png"
            alt="koma_white_logo"
            className="koma_small_logo"
            width={20}
            height={40}
            priority
          ></Image>
          <p className="title_all_rules">
            Copyright @ 2024 Koma Concept Store All rights reserve
          </p>
        </section>
        <section className="second_section">
          <ul className="list">
            <li className="link">for her</li>
            <li className="link">for his</li>
            <li className="link">brands</li>
            <li className="link">payment & delivery</li>
            <li className="link">about us</li>
            <li className="link">contacts</li>
          </ul>
        </section>
        <section className="third_section">
          <span className="title_location">
            kharkiv,
            <br /> 35 Hryhoriia skovorody st
          </span>
          <p className="title_inst">/instagram</p>
          <p className="title_telegram">/telegram</p>
          <section className="payment_services">
            <Image
              src="/apple_pay.png"
              width={64}
              height={26}
              priority
              alt="apple_pay"
              className="apple_pay"
            ></Image>
            <Image
              src="/google_pay.png"
              width={68}
              height={32}
              alt="google_pay"
              priority
              className="apple_pay"
            ></Image>
            <Image
              src="/visa.png"
              width={62}
              height={20}
              alt="visa_pay"
              priority
              className="apple_pay"
            ></Image>
            <Image
              src="/master_card.png"
              width={37}
              height={28}
              alt="master_card_pay"
              priority
              className="apple_pay"
            ></Image>
          </section>
          <p className="rules_mobule_version">
            Copyright @ 2024 Koma Concept Store All rights reserve
          </p>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
