import React, { useState } from "react";

import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

//components
import Nav from "../components/Navbar/index";
import TopProduct from "../components/Top/index";
import ProductList from "../components/ProductList/index";

export default function Home() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => setCart((currentCart) => [...currentCart, item]);
  // const addToCart = (item) => console.log(`item, get clicked`, item);
  const removeFromCart = (item) => {
    setCart((currentCart) => {
      const indexOfItemToRemove = currentCart.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (indexOfItemToRemove === -1) {
        return currentCart;
      }

      return [
        ...currentCart.slice(0, indexOfItemToRemove),
        ...currentCart.slice(indexOfItemToRemove + 1),
      ];
    });
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Bejamas Ecommerce</title>

        <meta name="description" content="E-commerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.centroid}>
        <Nav cart={cart} removeFromCart={removeFromCart} />
        <TopProduct />
        <ProductList addToCart={addToCart} />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
