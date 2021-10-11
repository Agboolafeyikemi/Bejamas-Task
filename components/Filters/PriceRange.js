import React, { useState } from "react";
import { Cancel } from "../Aniations/Cancel";
import styles from "../../styles/component/checkbox.module.css";
import RadioCheckBox from "../RadioCheckBox";

const PriceRange = () => {
  const [priceFilter, setPriceFilter] = useState([]);
  const priceRange = [
    "Lower than $20",
    "$20 - $100",
    "$100 - $200",
    "More than $200",
  ];
  return (
    // <aside>
    //   <div className={styles.productListCategoryTitle}>
    //     <div className={styles.category}>Category</div>
    //     <Cancel />
    //   </div>
    // </aside>

    <div className={styles.checkboxGroup}>
      <h4>Price range</h4>
      <div className={styles.productListCategoryG}>
        {priceRange?.map((price, index) => (
          <RadioCheckBox
            key={index}
            func={setPriceFilter}
            name="price"
            value={price}
            text={price}
            count={index}
          />
        ))}
      </div>
    </div>
  );
};
export default PriceRange;
