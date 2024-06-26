import React from "react";
import "../styles/product.css";

interface DescriptionI {
  codeProduct: string;
  brand: string;
  countryManufacture: string;
  gender: string;
  composition: string;
  features: string;
  description: string;
}

const Description: React.FC<DescriptionI> = ({
  codeProduct,
  brand,
  countryManufacture,
  gender,
  composition,
  features,
  description,
}) => {
  return (
    <>
      <div className="first_row">
        <div className="description_block">
          <ul className="description_list">
            <li className="list_description">
              <p className="description_list_part">Код продукту:</p>
              {codeProduct}
            </li>
            <li className="list_description">
              <p className="description_list_part">бренд:</p>
              {brand}
            </li>
            <li className="list_description">
              <p className="description_list_part">країна-виробник:</p>
              {countryManufacture}
            </li>
          </ul>
        </div>
        <div className="description_block_second">
          <ul className="description_list">
            <li className="list_description">
              <p className="description_list_part">стать:</p>
              {gender === "For Him" ? "Чоловiча" : "Жiноча"}
            </li>
            <li className="list_description">
              <p className="description_list_part">склад:</p>
              {composition}
            </li>
            <li className="list_description">
              <p className="description_list_part">модель:</p>Зріст моделі 1,85
              м, розмір M
            </li>
          </ul>
        </div>
        <div className="description_block_third">
          <h3 className="description_prod">опис продукту :</h3>
          <p className="description_text">{description}</p>
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
          <p className="return_text">{features}</p>
        </div>
      </div>
    </>
  );
};

export default Description;
