/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Image from "next/image";
import { useDataLayerValue } from "../context-api/DataLayer";
import { actionTypes } from "../context-api/reducer";
import styles from "../styles/component/productlist.module.css";

const ProductItem = ({ data }) => {
  const [{ productCart }, dispatch] = useDataLayerValue();
  const updateCart = () => {
    let cartList = productCart;
    cartList.push(data);

    dispatch({
      type: actionTypes.UPDATE_CART,
      productCart: cartList,
    });
  };
  return (
    <div className={styles.productItem}>
      <div className={styles.productItemImage}>
        <Image
          src={data?.image?.src}
          alt={data?.image?.alt}
          height={398}
          width={282}
        />
        {data.bestseller ? (
          <div className={styles.productTag}>Best Seller</div>
        ) : (
          ""
        )}
        {data.featured ? <div className={styles.productTag}>Featured</div> : ""}
        <button
          onClick={() => updateCart(data)}
          className={styles.productCartBtn}
        >
          Add to Cart
        </button>
      </div>
      <div className={styles.productCategory}>{data.category}</div>
      <div className={styles.productName}>{data.name}</div>
      <div className={styles.productPrice}>${data.price}</div>
    </div>
  );
};

export default ProductItem;
