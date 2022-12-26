import React from "react";
import styles from "../styles/Home.module.css";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title>Ninja | About </title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>About</h1>
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
      </div>
    </>
  );
};

export default About;
