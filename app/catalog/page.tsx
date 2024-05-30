import CatalogProducts from "../components/CatalogProducts";
import SortingComponent from "../components/SortingComponent";
import "../styles/catalog.css";
export default function Home() {
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
            <SortingComponent />
          </section>
          <section className="content_product">
            <CatalogProducts />
          </section>
        </section>
      </div>
    </main>
  );
}
