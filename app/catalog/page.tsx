"use client";
import React, { useState } from "react";
import Image from "next/image";
import CatalogProducts from "../components/CatalogProducts";
import SortingBrands from "../components/SortingBrands";
import SortingCategory from "../components/SortingCategory";
import SortingSubCategory from "../components/SortingSubCategory";
import { useRequest } from "../hooks/useRequest";
import SortingNavBar from "../components/SortingNavBar";
import "../styles/catalog.css";
import SortingGender from "../components/SortingGender";

type FilterType = "category" | "subcategory" | "brands";

export default function Home() {
  const { data } = useRequest("products");
  const [filters, setFilters] = useState<Filters>({
    category: [],
    subcategory: [],
    brands: [],
  });

  const handleSelectFilter = (filterType: string, value: string) => {
    setFilters((prevFilters) => {
      const filterKey = filterType as FilterType;
      const filterValues = prevFilters[filterKey];
      if (filterValues.includes(value)) {
        return {
          ...prevFilters,
          [filterKey]: filterValues.filter(
            (filterValue) => filterValue !== value
          ),
        };
      } else {
        return {
          ...prevFilters,
          [filterKey]: [...filterValues, value],
        };
      }
    });
  };

  const onClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    filterType: FilterType
  ) => {
    const name = e.currentTarget.id;
    handleSelectFilter(filterType, name);
  };

  const onDelete = () => {
    setFilters({
      category: [],
      subcategory: [],
      brands: [],
    });
  };

  return (
    <main className="body_wrapper">
      <div className="catalog_wrapper">
        <section>
          <p className="title_routing">home / catalog</p>
        </section>
        <section className="text_blok">
          <section className="block_first">
            <h1 className="title_page">catalog</h1>
          </section>
          <section className="block_second">
            <p className="title_sorting">sort : (default)</p>
          </section>
        </section>
        <section className="selected_sorting_categories">
          <SortingNavBar
            onSlectedFilter={handleSelectFilter}
            filters={filters}
            onDelete={onDelete}
          />
        </section>
        <section className="content_blok">
          <section className="content_sorting">
            <div className="select_block">
              {/* Component */}
              <SortingGender />
              <button className="button_select">for him</button>
              <button className="button_select">for her</button>
            </div>
            <SortingCategory
              onClick={(e) => onClick(e, "category")}
              filter={filters}
            />
            <SortingSubCategory
              onClick={(e) => onClick(e, "subcategory")}
              filter={filters}
            />
            <SortingBrands
              onClick={(e) => onClick(e, "brands")}
              filter={filters}
            />
          </section>
          <section className="content_product">
            <CatalogProducts products={data} />
          </section>
        </section>
      </div>
    </main>
  );
}
