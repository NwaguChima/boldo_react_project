import Head from "next/head";
import React from "react";
import HeaderNav from "../components/headerNav/HeaderNav";
import styles from "./pages.module.scss";

interface AboutProps {}

export const About: React.FC<AboutProps> = ({}) => {
  return (
    <div>
      <Head>
        <title>Boldo-About</title>
        <meta name="description" content="discover more about Boldo" />
        <link rel="icon" href="/images/Logo.svg" />
      </Head>
      <header className={styles.aboutHeader}>
        <HeaderNav mode="dark" />
      </header>
      <main>Hello Page</main>
    </div>
  );
};

export default About;
