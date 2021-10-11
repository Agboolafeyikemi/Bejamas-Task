import React, { useEffect, useState } from "react";
import styles from "../styles/component/productlist.module.css";
import { useDataLayerValue } from "../context-api/DataLayer";
import { actionTypes } from "../context-api/reducer";
import { Sort, SortMobile } from "../components/Aniations";
import { useIsSmall } from "../helpers/mediaQuery";

const ProductListHeader = () => {
  const [{ products, mobileFilterBag }, dispatch] = useDataLayerValue();

  //check for mobile view
  const isSmall = useIsSmall();
  const handleMobileFilterView = () => {
    if (
      Math.max(window.innerWidth || document.documentElement.clientWidth) < 999
    ) {
      mobileFilterBag === false
        ? dispatch({
            type: actionTypes.MOBILE_FILTER_BAG,
            mobileFilterBag: true,
          })
        : dispatch({
            type: actionTypes.MOBILE_FILTER_BAG,
            mobileFilterBag: false,
          });
    }
  };

  useEffect(() => {
    if (
      Math.max(window.innerWidth || document.documentElement.clientWidth) < 999
    ) {
      dispatch({
        type: actionTypes.MOBILE_FILTER_BAG,
        mobileFilterBag: false,
      });
    }
  }, []);

  if (typeof window !== "undefined") {
    window.addEventListener("resize", () => {
      if (
        Math.max(window.innerWidth || document.documentElement.clientWidth) <
        999
      ) {
        dispatch({
          type: actionTypes.MOBILE_FILTER_BAG,
          mobileFilterBag: false,
        });
      } else {
        dispatch({
          type: actionTypes.MOBILE_FILTER_BAG,
          mobileFilterBag: true,
        });
      }
    });
  }

  const [isAscending, setIsAscending] = useState(false);
  const sortAlphabetically = () => {
    if (isAscending === false) {
      products.sort((a, b) => a.name.localeCompare(b.name));
      setIsAscending(true);
    }

    if (isAscending === true) {
      products.sort((a, b) => b.name.localeCompare(a.name));
      setIsAscending(false);
    }

    dispatch({
      type: actionTypes.GENERATE_PRODUCT_LIST,
      products: products,
    });
  };

  const [isSortByPrice, setIsSortByPrice] = useState(false);
  const sortByPrice = () => {
    if (isSortByPrice === false) {
      products.sort((a, b) => a.price - b.price);
      setIsSortByPrice(true);
    }

    if (isSortByPrice === true) {
      products.sort((a, b) => b.price - a.price);
      setIsSortByPrice(false);
    }

    dispatch({
      type: actionTypes.GENERATE_PRODUCT_LIST,
      products: products,
    });
  };

  return (
    <header className={styles.productListHeader}>
      <div className={styles.productListTypeName}>
        <span className={styles.pho}>Photography</span>
        <span className={styles.slashPad}> / </span>
        <span className={styles.premium}>Premium Photos</span>
      </div>

      <div className={styles.productListSortFilter}>
        {/* sort alphabetically*/}
        <div className={styles.productListSort} onClick={sortAlphabetically}>
          <Sort />
          <div className={styles.sort}>Sort By</div>
        </div>
        {/*sort by price */}
        <select
          onChange={sortByPrice}
          name="priceOrder"
          className={styles.priceOrder}
        >
          <option value="">Price</option>
          <option value="Ascending">Ascending</option>
          <option value="Descending">Descending</option>
        </select>

        {/* mobile tap filter */}
        <div
          onClick={handleMobileFilterView}
          className={styles.productListMobileSort}
        >
          <SortMobile />
        </div>
      </div>
    </header>
  );
};

export default ProductListHeader;
