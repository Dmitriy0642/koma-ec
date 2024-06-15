"use client";
import React, { useState } from "react";
import Image from "next/image";
import CatalogProducts from "../components/CatalogProducts";
import SortingBrands from "../components/SortingBrands";
import SortingCategory from "../components/SortingCategory";
import SortingSubCategory from "../components/SortingSubCategory";
import { useRequest } from "../hooks/useRequest";
import SortingNavBar from "../components/SortingNavBar";
import SortingGender from "../components/SortingGender";
import LatestArrivals from "../components/LatestArrivals";
import FiltersToggle from "../components/FiltersToggle";
import Loader from "../components/Loader";
import "../styles/catalog.css";

type FilterType = "category" | "subcategory" | "brands" | "gender";

export default function Home() {
  const { data, isLoading } = useRequest("products");
  const [filters, setFilters] = useState<Filters>({
    gender: ["For Him"],
    category: [],
    subcategory: [],
    brands: [],
  });
  const [open, setIsOpen] = useState(false);

  if (isLoading) {
    return <Loader />;
  }

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
      gender: [],
      category: [],
      subcategory: [],
      brands: [],
    });
  };
  const isOpen = (open: boolean) => {
    setIsOpen(!open);
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
        <section className="button_setup_filters">
          {open === true ? (
            <FiltersToggle
              onSlectedFilter={handleSelectFilter}
              filters={filters}
              onClick={() => isOpen(open)}
            />
          ) : (
            <button className="button_filters" onClick={() => isOpen(open)}>
              <Image
                src="/settings_setup.png"
                alt="setting_setup"
                width={16}
                height={16}
                className="setting_setup_picture"
              ></Image>
              show filters
            </button>
          )}
        </section>
        <section className="content_blok">
          <section className="content_sorting">
            <SortingGender
              onClick={(e) => onClick(e, "gender")}
              filter={filters}
            />
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
          <section className="latest_arrivals_block">
            <LatestArrivals />
          </section>
        </section>
      </div>
    </main>
  );
}
