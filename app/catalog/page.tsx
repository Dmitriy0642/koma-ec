"use client";
import React, { useState } from "react";
import CatalogProducts from "../components/CatalogProducts";
import SortingBrands from "../components/SortingBrands";
import SortingCategory from "../components/SortingCategory";
import SortingSubCategory from "../components/SortingSubCategory";
import { useRequest } from "../hooks/useRequest";
import "../styles/catalog.css";
import "../styles/sorting.css";

interface Filters {
  category: string;
  subcategory: string;
  brands: string;
}

export default function Home() {
  const { data } = useRequest("products");
  const [filters, setFilters] = useState<Filters>({
    category: "",
    subcategory: "",
    brands: "",
  });

  const handleSelectFilter = (filterType: string, value: string) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };
  const onClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    filterType: string
  ) => {
    const name = e.currentTarget.id;
    handleSelectFilter(filterType, name);
  };

  return (
    <main className="body_wrapper">
      <div className="catalog_wrapper">
        <section className="title_page_block">
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
        <section className="content_blok">
          <section className="content_sorting">
            <div className="select_block">
              <button className="button_select">for him</button>
              <button className="button_select">for her</button>
            </div>
            <SortingCategory onClick={(e) => onClick(e, "category")} />
            <SortingSubCategory onClick={(e) => onClick(e, "subcategory")} />
            <SortingBrands onClick={(e) => onClick(e, "brands")} />
          </section>
          <section className="content_product">
            <CatalogProducts products={data} />
          </section>
        </section>
      </div>
    </main>
  );
}
