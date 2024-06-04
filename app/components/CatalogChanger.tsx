import React from "react";
import "../globals.css";

interface CatalogChangerPtops {
  value: boolean;
  setOption: React.Dispatch<React.SetStateAction<boolean>>;
}
const CatalogChanger: React.FC<CatalogChangerPtops> = ({
  value,
  setOption,
}) => {
  return (
    <section className="catalogchanger_wrapper">
      <section className="catalog_underwrapper">
        <div
          className="button_changer"
          id="him"
          onClick={() => setOption(true)}
        >
          {value === true ? "(him)" : "him"}
        </div>
        <div
          className="button_changer"
          id="her"
          onClick={() => setOption(false)}
        >
          {value === false ? "(her)" : "her"}
        </div>
      </section>
      <section className="block_with_button">
        <button className="button_show_catalog">
          {value === true ? "show (his) catalog" : "show (her) catalog"}
        </button>
      </section>
    </section>
  );
};

export default CatalogChanger;
