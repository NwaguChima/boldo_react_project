import Head from "next/head";
import React from "react";
import HeaderNav from "../components/headerNav/HeaderNav";
import { OurNumbers } from "../components/ourNumbers/OurNumbers";
import OurStory from "../components/ourStory/OurStory";
import { OurTeam } from "../components/ourTeam/OurTeam";
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
        <div className={styles.aboutHeader__hero}>
          <p>About</p>
          <h1>We love to make great things, things that matter.</h1>
          <p>
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </p>
        </div>
      </header>
      <main>
        <OurStory />
        <OurNumbers />
        <OurTeam />
      </main>
    </div>
  );
};

export default About;
