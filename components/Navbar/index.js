import React from "react";
import Image from "next/image";

import Logo from "../../public/images/Logo.png";
import Cart from "../../public/images/cart.png";
// import { Cart } from "../Aniations";
import styles from "./navbar.module.css";

const Navbar = () => (
  <section className={styles.nav}>
    <Image src={Logo} alt="logo" height={25.22} width={159} />
    <div className={styles.productCart}>
      <div className={styles.navCartIcon}>
        <Image src={Cart} alt="cart" height={54} width={54} />
      </div>
      <div className={styles.cartCounter}></div>
    </div>
  </section>
);

export default Navbar;
