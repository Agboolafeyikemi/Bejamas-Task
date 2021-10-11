import React, { useState } from "react";
import Cancel from "../Aniations/Cancel";
import CheckBox from "../CheckBox";
import styles from "../../styles/component/checkbox.module.css";

const CategoryFilter = ({ handleMobileFilterView, setCategoryFilterList }) => {
  const categories = [
    "People",
    "Premium",
    "Pets",
    "Food",
    "Landmarks",
    "Cities",
    "Nature",
  ];

  return (
    <div className={styles.productListCategoryTitle}>
      <div className={styles.categoryMobile}>
        <h4>Category</h4>

        <Cancel onClick={() => handleMobileFilterView()} />
      </div>
      <div className={styles.productListCategoryGroup}>
        {categories?.map((category, index) => (
          <CheckBox
            key={index}
            func={setCategoryFilterList}
            name={category}
            value={category}
            count={index}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
