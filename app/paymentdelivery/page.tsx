import "../styles/paymentdelivery.css";

export default function Home() {
  return (
    <main className="body_wrapper">
      <section className="routing_block">
        <span className="routing_text">Головна / оплата та доставка</span>
      </section>
      <div className="wrapper_paymentdelivery">
        <section className="conten_payment">
          <h1 className="content_payment_title">Оплата & Доставка</h1>
        </section>
        <section className="text_description_block">
          <h2 className="title_kind_of_delivery">Варіанти доставки</h2>
          <p className="text_description">
            *поштовою службою “Нова Пошта” по Україні; *міжнародна доставка від
            “УКРПОШТА” або “Nova Global” (зверніть увагу що – в залежності від
            країни доставки, можуть бути нараховані додаткові митні платежі*)
          </p>
          <p className="text_description_second">
            **вартість доставки оплачує покупець. ***відправлення здійснюється
            пн-сб до 16.00. Термін доставки: – по Україні 1-2 дня; – по світу
            2-4 тижні;
          </p>
          <h2 className="title_kind_of_payment">Варіанти сплати замовлення</h2>
          <p className="text_description">
            *онлайн оплата карткою Visa\Master Card; *безготівкова оплата через
            термінал картою будь-якого банку; *готівкою при отриманні
            (післяплата від ТОВ “НоваПеЙ”);
          </p>
          <p className="text_description_second">
            ** всі комісії сплачує покупець. *** доставку у разі відмови на
            відділенні Нової Пошти – оплачує покупець (наступне замовлення
            можливе тільки після сплати цієї доставки)
          </p>
        </section>
      </div>
    </main>
  );
}
