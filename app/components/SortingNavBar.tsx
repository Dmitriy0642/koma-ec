import React from "react";
import Image from "next/image";
import "../styles/sorting.css";

interface SortingNavBarProps {
  filters: { [key in FilterType]: string[] };
  onSlectedFilter: (filterType: FilterType, value: string) => void;
  onDelete: () => void;
}

type FilterType = "category" | "subcategory" | "brands";

const SortingNavBar: React.FC<SortingNavBarProps> = ({
  filters,
  onSlectedFilter,
  onDelete,
}) => {
  return (
    <div className="block_bar">
      {Object.keys(filters).map((filterType) => (
        <div className="under_bar_block" key={filterType}>
          {filters[filterType as FilterType].map((filterValue) => (
            <button
              className="button_selected_bar"
              key={filterValue}
              onClick={() =>
                onSlectedFilter(filterType as FilterType, filterValue)
              }
            >
              {filterValue}
              <section className="container-in-button">
                <Image
                  src="/cross_black.png"
                  alt="cross"
                  width={12}
                  height={12}
                  className="cross_black"
                ></Image>
              </section>
            </button>
          ))}
        </div>
      ))}
      {filters.brands.length > 0 ||
      filters.category.length > 0 ||
      filters.subcategory.length > 0 ? (
        <button className="button_delete_all" onClick={onDelete}>
          Delete everything
          <Image
            src="/cross_black.png"
            alt="cross"
            width={12}
            height={12}
            className="button_delete_cross"
          ></Image>
        </button>
      ) : (
        <></>
      )}
    </div>
  );
};

export default SortingNavBar;
