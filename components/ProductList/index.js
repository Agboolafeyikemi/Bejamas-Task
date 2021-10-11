import React, { useState } from "react";
import ReactPaginate from "react-paginate";

import styles from "../../styles/component/productlist.module.css";
// import ProductItemsList from "./ProductItemsList";
import Data from "../../data.json";
import CategoryFilter from "../../components/Filters/CategoryFilter";
import PriceRange from "../../components/Filters/PriceRange";
import ProductItem from "../ProductItem";
import ProductListHeader from "../ProductListHeader.js";
import { useDataLayerValue } from "../../context-api/DataLayer";

const ProductList = () => {
  const [{ products }] = useDataLayerValue();
  const [pageNum, setPageNum] = useState(0);

  // ==== PAGINATION ====
  const productsPerPage = 6;
  const pagesVisited = pageNum * productsPerPage;
  const displayProducts = products
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((product, keyId) => {
      return <ProductItem key={keyId} id={keyId} data={product} />;
    });

  const pageCounter = Math.ceil(products.length / productsPerPage);
  const [hidePrev, setHidePrev] = useState("hidebx");
  const [hideNext, setHideNext] = useState("");

  const changePage = ({ selected }) => {
    setPageNum(selected);
    if (selected > 0) setHidePrev("");
    if (selected === 0) setHidePrev("hidebx");
    if (selected >= pageCounter - 1) setHideNext("hidebx");
    if (selected < pageCounter - 1) setHideNext("");
  };

  // ==== END OF PAGINATION ====
  return (
    <section>
      <ProductListHeader />
      <div className={styles.productList}>
        <aside className={styles.productListCategory}>
          <CategoryFilter />
          <PriceRange />
        </aside>
        <div className={styles.productListContainer}>
          <aside className={styles.productItemsList}>{displayProducts}</aside>
          <ReactPaginate
            previousLabel={""}
            nextLabel={""}
            pageCount={pageCounter}
            onPageChange={changePage}
            containerClassName={styles.paginationHolder}
            previousLinkClassName={styles.prevBtn}
            previousClassName={`${styles.prevHolder} ${hidePrev}`}
            nextLinkClassName={styles.nextBtn}
            nextClassName={`${styles.nextHolder} ${hideNext}`}
            disabledClassName={styles.paginationDisabled}
            activeClassName={styles.paginationActive}
          />
        </div>
      </div>
    </section>
  );
};

export default ProductList;
