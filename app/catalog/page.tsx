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
import FiltersToggle from "../components/FiltersToggle";
import Loader from "../components/Loader";
import { sortingOptions } from "../harddata/linkInSortingBar";
import "../styles/catalog.css";

type FilterType = "category" | "subcategory" | "brands" | "gender";
type Filters = {
  gender: string[];
  category: string[];
  subcategory: string[];
  brands: string[];
};

export default function Home() {
  const { data, isLoading } = useRequest("products");

  const [filters, setFilters] = useState<Filters>({
    gender: [],
    category: [],
    subcategory: [],
    brands: [],
  });
  const [open, setIsOpen] = useState(false);
  const [isOpenSortingMenu, setIsOpenSortingMenu] = useState(false);
  const [selecteId, setSelectedId] = useState("");
  if (isLoading) {
    return <Loader />;
  }

  const filterProducts = (products: any) => {
    return products.filter((product: any) => {
      const genderMatch = filters.gender.length
        ? filters.gender
            .map((g) => g.toLowerCase())
            .includes(product.gender.toLowerCase())
        : true;

      const categoryMatch = filters.category.length
        ? filters.category
            .map((category) => category.toLowerCase())
            .includes(product.category.toLowerCase())
        : true;

      const subcategoryMatch = filters.subcategory.length
        ? filters.subcategory
            .map((subcategory) => subcategory.toLowerCase())
            .includes(product.subcategory.toLowerCase())
        : true;

      const brandsMatch = filters.brands.length
        ? filters.brands
            .map((brand) => brand.toLowerCase())
            .includes(product.firm.toLowerCase())
        : true;

      return categoryMatch && subcategoryMatch && brandsMatch && genderMatch;
    });
  };

  const sortProducts = (products: any[], sortId: string) => {
    switch (sortId) {
      case "cheapFirst":
        return products.sort((a, b) => a.price - b.price);
      case "expensiveFirst":
        return products.sort((a, b) => b.price - a.price);
      case "nameAsc":
        return products.sort((a, b) => a.name.localeCompare(b.name));
      case "nameDesc":
        return products.sort((a, b) => b.name.localeCompare(a.name));
      case "newFirst":
        return products.sort(
          (a, b) =>
            new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
        );
      case "oldFirst":
        return products.sort(
          (a, b) =>
            new Date(a.dateAdded).getTime() - new Date(b.dateAdded).getTime()
        );
      default:
        return products;
    }
  };

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

  ///онклик кнопок сортировки
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

  const openSortingMenu = (e: React.MouseEvent) => {
    setIsOpenSortingMenu(!isOpenSortingMenu);
  };

  const isOpen = (open: boolean) => {
    setIsOpen(!open);
  };

  const handleSelect = (e: React.MouseEvent) => {
    const id = e.currentTarget.id;

    setSelectedId(id);
    setIsOpenSortingMenu(!isOpenSortingMenu);
  };

  const filteredProducts = filterProducts(data);
  const sortedProducts = sortProducts(filteredProducts, selecteId);
  const selectedOption = sortingOptions.find(
    (option) => option.id === selecteId
  );
  const selectedLabel = selectedOption
    ? selectedOption.label
    : "sorting:(default)";
  return (
    <main className="body_wrapper">
      <div className="catalog_wrapper">
        <section>
          <p className="title_naming_of_route">home / catalog</p>
        </section>
        <section className="text_blok">
          <section className="block_first">
            <h1 className="title_page">catalog</h1>
          </section>
          <section className="block_second">
            {!isOpenSortingMenu ? (
              <p className="title_sorting" onClick={openSortingMenu}>
                {selectedLabel}
              </p>
            ) : (
              <div className="openSortingMenu">
                <ul className="list_sorting_bar">
                  {sortingOptions.map((item: { id: string; label: string }) => (
                    <li
                      key={item.id}
                      id={item.id}
                      className={`list_of_sorting_bar ${
                        selecteId === item.id
                          ? "list_of_sorting_bar_selected"
                          : "list_of_sorting_bar"
                      }`}
                      onClick={handleSelect}
                    >
                      {selecteId === item.id ? (
                        <Image
                          className="succes_selected"
                          src="/sucess.png"
                          alt="selected"
                          width={12}
                          height={12}
                        ></Image>
                      ) : (
                        <></>
                      )}
                      {item.label}
                    </li>
                  ))}
                </ul>
              </div>
            )}
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
            <CatalogProducts products={sortedProducts} />
          </section>
        </section>
      </div>
    </main>
  );
}
