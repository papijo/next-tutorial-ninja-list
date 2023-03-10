import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja | Home </title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Aute duis quis aliqua irure adipisicing fugiat eu voluptate
          exercitation. Nisi consectetur anim eu est do deserunt mollit. Est
          dolor enim magna mollit qui dolore elit aute tempor adipisicing nisi
          ut sint. Reprehenderit do et quis qui non aute quis aliquip eiusmod id
          aliqua esse. Cillum officia incididunt nisi et est anim ad. Est
          pariatur duis exercitation proident aute esse tempor nulla tempor
          pariatur do aliquip incididunt pariatur.
        </p>
        <p className={styles.text}>
          Aute duis quis aliqua irure adipisicing fugiat eu voluptate
          exercitation. Nisi consectetur anim eu est do deserunt mollit. Est
          dolor enim magna mollit qui dolore elit aute tempor adipisicing nisi
          ut sint. Reprehenderit do et quis qui non aute quis aliquip eiusmod id
          aliqua esse. Cillum officia incididunt nisi et est anim ad. Est
          pariatur duis exercitation proident aute esse tempor nulla tempor
          pariatur do aliquip incididunt pariatur.
        </p>
        <Link legacyBehavior href="/ninjas">
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
