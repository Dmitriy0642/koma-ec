import React from "react";
import "../globals.css";
const CatalogChanger: React.FC = () => {
  return (
    <section className="catalogchanger_wrapper">
      <section className="catalog_underwrapper">
        <div className="button_changer">his</div>
        <div className="button_changer">her</div>
      </section>
      <section className="button_block">
        <button className="button_show_catalog">show his catalog</button>
      </section>
    </section>
  );
};

export default CatalogChanger;
