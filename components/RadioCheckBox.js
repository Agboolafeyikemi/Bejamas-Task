import React from "react";
import styles from "../styles/component/checkbox.module.css";

const RadioCheckBox = (props) => {
  const { count, name, func, text, value } = props;
  return (
    <div className={styles.checkboxHolder}>
      <input
        type="radio"
        name={name}
        className={styles.hideBx}
        id={count}
        value={value}
        onChange={(e) => func((prevState) => [value])}
      />
      <label htmlFor={count} className={styles.formCheckbox}>
        {text}
      </label>
    </div>
  );
};

export default RadioCheckBox;
