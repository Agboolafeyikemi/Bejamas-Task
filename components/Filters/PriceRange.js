import React, { useState } from "react";
import styles from "../../styles/component/checkbox.module.css";
import RadioCheckBox from "../RadioCheckBox";

const PriceRange = ({ setPriceFilterList }) => {
  const priceRange = [
    { price: "Lower than $20", index: 101 },
    { price: "$20 - $100", index: 102 },
    { price: "$100 - $200", index: 103 },
    { price: "More than $200", index: 104 },
  ];
  return (
    <div className={styles.productListCategoryTitle}>
      <h4>Price range</h4>
      <div className={styles.productListCategoryG}>
        {priceRange?.map(({ price, index }) => (
          <RadioCheckBox
            key={index}
            func={setPriceFilterList}
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
