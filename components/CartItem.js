/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Image from "next/image";
import styles from "../styles/component/cartItem.module.css";

const CartItem = ({ data }) => {
  return (
    <div className={styles.productBagTile}>
      <div className={styles.productBagInfo}>
        <div className={styles.productBagName}>{data?.name}</div>
        <div className={styles.productBagPrice}>{`${data?.price}`}</div>
      </div>
      <div className={styles.productBagImageBox}>
        <Image
          src={data?.image?.src}
          alt={data?.image?.alt}
          height={86}
          width={149}
        />
      </div>
    </div>
  );
};

export default CartItem;
