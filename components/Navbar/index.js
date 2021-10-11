import React, { useState } from "react";
import Image from "next/image";
import { useIsSmall } from "../../helpers/mediaQuery";
import { useDataLayerValue } from "../../context-api/DataLayer";
import { actionTypes } from "../../context-api/reducer";
import CartItem from "../CartItem";

import { Cart, CartMobile, Logo, LogoMobile } from "../Aniations";
import styles from "../../styles/component/navbar.module.css";

const Navbar = () => {
  const [isCartVisible, setIsCartVisible] = useState(true);
  //check for mobile view
  const isSmall = useIsSmall();
  const toggleCartBag = () => {
    return isCartVisible === false
      ? setIsCartVisible(true)
      : setIsCartVisible(false);
  };
  const [{ productCart }, dispatch] = useDataLayerValue();

  const clearCart = () => {
    dispatch({
      type: actionTypes.UPDATE_CART,
      productCart: [],
    });
    setTimeout(() => toggleCartBag(), 300);
  };
  return (
    <section className={styles.nav}>
      {isSmall ? (
        <div className={styles.logoBox}>
          {" "}
          <LogoMobile />{" "}
        </div>
      ) : (
        <div className={styles.logoBox}>
          <Logo />
        </div>
      )}
      <div className={styles.productCart}>
        {isSmall ? (
          <div className={styles.navCartIcon}>
            <CartMobile />
          </div>
        ) : (
          <div className={styles.navCartIcon}>
            <Cart />
          </div>
        )}
        <div
          className={
            productCart.length > 0 ? styles.cartCounter : styles.cartHide
          }
          onClick={() => toggleCartBag()}
        >
          {" "}
          {productCart.length}
        </div>
      </div>

      {/* product cart bag */}
      <aside
        className={
          productCart.length > 0
            ? styles.productCartBag
            : styles.productCartBagHide
        }
      >
        <div
          onClick={() => toggleCartBag()}
          className={styles.closeBtn}
          title="Close"
        ></div>
        <div className={styles.clrFix}></div>
        {productCart?.map((cartItem, keyId) => {
          return <CartItem key={keyId} data={cartItem} />;
        })}
        {/* clear button */}
        <button onClick={() => clearCart()} className={styles.btnTranspBack}>
          Clear
        </button>
      </aside>
    </section>
  );
};

export default Navbar;
