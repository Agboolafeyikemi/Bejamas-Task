import React, { useState } from "react";
import { Cancel } from "../Aniations/Cancel";
import CheckBox from "../CheckBox";

import styles from "../../styles/component/checkbox.module.css";

const CategoryFilter = () => {
  const [categoryFilter, setCategoryFilter] = useState([]);

  const categories = [
    "People",
    "Premium",
    "Pets",
    "Food",
    "Landmarks",
    "Cities",
    "Nature",
  ];
  const handleClick = (index) => {
    console.log(index, "is clicked");
  };
  return (
    <div className={styles.checkboxGroup}>
      <h4>Category</h4>
      <div className={styles.productListCategoryGroup}>
        {categories?.map((category, index) => (
          <CheckBox
            key={index}
            func={setCategoryFilter}
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
