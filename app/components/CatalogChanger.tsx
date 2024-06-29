import React from "react";
import { useRouter } from "next/navigation";
import "../globals.css";

interface CatalogChangerPtops {
  value: boolean;
  setOption: React.Dispatch<React.SetStateAction<boolean>>;
}
const CatalogChanger: React.FC<CatalogChangerPtops> = ({
  value,
  setOption,
}) => {
  const router = useRouter();
  const onClick = (e: React.MouseEvent) => {
    const getId = e.currentTarget.id;
    if (getId === "him") {
      setOption(true);
    } else {
      setOption(false);
    }
  };

  const onShowCatalog = () => {
    if (value) {
      router.push("/catalog");
    } else {
      router.push("/coomingsoon");
    }
  };

  return (
    <section className="catalogchanger_wrapper">
      <section className="catalog_underwrapper">
        <div className="button_changer" id="him" onClick={onClick}>
          {value === true ? "(him)" : "him"}
        </div>
        <div className="button_changer" id="her" onClick={onClick}>
          {value === true ? "her" : "(her)"}
        </div>
      </section>
      <section className="block_with_button">
        <button className="button_show_catalog" onClick={onShowCatalog}>
          {value === true ? "show (his) catalog" : "show (her) catalog"}
        </button>
      </section>
    </section>
  );
};

export default CatalogChanger;
