import React from "react";
import Image from "next/image";
import SortingGender from "./SortingGender";
import SortingCategory from "./SortingCategory";
import SortingSubCategory from "./SortingSubCategory";
import SortingBrands from "./SortingBrands";
import "../styles/menu.css";

type FilterType = "category" | "subcategory" | "brands" | "gender";

interface FiltersToggleProps {
  filters: { [key in FilterType]: string[] };
  onSlectedFilter: (filterType: FilterType, value: string) => void;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}
const FiltersToggle: React.FC<FiltersToggleProps> = ({
  filters,
  onSlectedFilter,
  onClick,
}) => {
  return (
    <div className="filtertoggle_wrapper">
      <section className="filtertoggle_underwrapper">
        <section className="hide_filter_block">
          <button className="button_hide_filters" onClick={onClick}>
            <Image
              src="/setting_setup_white.png"
              alt="setting_setup"
              width={16}
              height={16}
              className="setup_settings"
            ></Image>
            Hide filters
          </button>
        </section>
        <section className="gender_sort_block">
          <SortingGender
            filter={filters}
            onClick={(e) => onSlectedFilter("gender", e.currentTarget.id)}
          />
        </section>
        <section className="category_block">
          <SortingCategory
            filter={filters}
            onClick={(e) => onSlectedFilter("category", e.currentTarget.id)}
          />
        </section>
        <section className="subcategory_block">
          <SortingSubCategory
            filter={filters}
            onClick={(e) => onSlectedFilter("subcategory", e.currentTarget.id)}
          />
        </section>
        <section className="brand_block">
          <SortingBrands
            filter={filters}
            onClick={(e) => onSlectedFilter("brands", e.currentTarget.id)}
          />
        </section>
      </section>
    </div>
  );
};

export default FiltersToggle;
