import React from "react";
import "../styles/product.css";

const Description = () => {
  return (
    <>
      <div className="first_row">
        <div className="description_block">
          <ul className="description_list">
            <li className="list_description">
              <p className="description_list_part">Код продукту:</p> AT00438
            </li>
            <li className="list_description">
              <p className="description_list_part">бренд:</p> Si
            </li>
            <li className="list_description">
              <p className="description_list_part">країна-виробник:</p>
              італія
            </li>
          </ul>
        </div>
        <div className="description_block_second">
          <ul className="description_list">
            <li className="list_description">
              <p className="description_list_part">стать:</p>чоловіча
            </li>
            <li className="list_description">
              <p className="description_list_part">склад:</p>100% бавовна
            </li>
            <li className="list_description">
              <p className="description_list_part">модель:</p>Зріст моделі 1,85
              м, розмір M
            </li>
          </ul>
        </div>
        <div className="description_block_third">
          <h3 className="description_prod">опис продукту :</h3>
          <p className="description_text">
            Двоколірний бавовняний світшот з напиленням Stone Island з ефектом
            розпилення, фірмовим мотивом компаса, нашивкою з логотипом на рукаві
            та горловиною екіпажу.
          </p>
        </div>
      </div>
      <div className="second_row">
        <div className="delivery_block">
          <h3 className="delivery_title">доставка:</h3>
          <p className="delivery_text">
            Двоколірний бавовняний світшот з напиленням Stone Island з ефектом
            розпилення, фірмовим мотивом компаса, нашивкою з логотипом на рукаві
            та горловиною екіпажу.
          </p>
        </div>
        <div className="return_block">
          <h3 className="return_title">обмін і повернення:</h3>
          <p className="return_text">
            Двоколірний бавовняний світшот з напиленням Stone Island з ефектом
            розпилення, фірмовим мотивом компаса, нашивкою з логотипом на рукаві
            та горловиною екіпажу.
          </p>
        </div>
        <div className="features_block">
          <h3 className="features_title">особливості : </h3>
          <ul className="fetures_list">
            <li className="features_link">
              Гарбузово-помаранчевий/світло-бежевий
            </li>
            <li className="features_link">Бавовна</li>
            <li className="features_link">Текстура джерсі</li>
            <li className="features_link">Двоколірний дизайн</li>
            <li className="features_link">Ефект аерозольної фарби</li>
            <li className="features_link">Фірмовий мотив компаса</li>
            <li className="features_link">Нашивка з логотипом на рукаві</li>
            <li className="features_link">Кругла горловина</li>
            <li className="features_link">Нагрудна кишеня на блискавці</li>
            <li className="features_link">Ребристі манжети та поділ</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Description;
