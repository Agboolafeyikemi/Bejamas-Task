import React from "react";
import styles from "../styles/component/checkbox.module.css";

const CheckBox = (props) => {
  const $ = (selector) => {
    return document.querySelector(selector);
  };

  //destructure
  const { name, count, value, func } = props;
  return (
    <div className={styles.checkboxHolder}>
      <input
        type="checkbox"
        name={name}
        className={styles.hideBx}
        id={count}
        value={value}
        onChange={(e) =>
          func(() => {
            let form = $("#filterForm");
            let concatArray = [];
            for (let i = 0; i < form.length; i++) {
              if (form[i].checked)
                concatArray = [...concatArray, form[i].value];
            }

            return [concatArray];
          })
        }
      />
      <label htmlFor={count} className={styles.formCheckbox}>
        {name}
      </label>
    </div>
  );
};

export default CheckBox;
