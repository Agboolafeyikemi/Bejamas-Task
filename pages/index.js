import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

//components
import Nav from "../components/Navbar/index";
import TopProduct from "../components/Top/index";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bejamas Ecommerce</title>

        <meta name="description" content="E-commerce" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.centroid}>
        <Nav />
        <TopProduct />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
