import React, { useState } from "react";
import Image from "next/image";

import { useDataLayerValue } from "../../context-api/DataLayer";
import { actionTypes } from "../../context-api/reducer";
import CartItem from "../CartItem";
import Logo from "../../public/images/Logo.png";
import Cart from "../../public/images/cart.png";
// import { Cart } from "../Aniations";
import styles from "../../styles/component/navbar.module.css";

const Navbar = () => {
  const [isCartVisible, setIsCartVisible] = useState(true);

  const toggleCartBag = () => {
    console.log(`clicked\n\n\n\n\n\n\n`);
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
      <Image src={Logo} alt="logo" height={25.22} width={159} />
      <div className={styles.productCart}>
        <div className={styles.navCartIcon}>
          <Image
            src={Cart}
            alt="cart"
            height={54}
            width={54}
            onClick={() => toggleCartBag()}
          />
        </div>
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
