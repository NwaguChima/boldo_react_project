import Image from "next/image";
import React from "react";
import ButtonPrimary from "../buttons/ButtonPrimary";
import HeaderNav from "../headerNav/HeaderNav";
import styles from "./Header.module.scss";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header className={styles.header}>
      <HeaderNav mode="light" />
      <div className={styles.heroContainer}>
        <div className={styles.heroContainer__items}>
          <div className={styles.heroContainer__headingText}>
            <h1>Save time by building fast with Boldo Template </h1>
            <p>
              Funding handshake buyer business-to-business metrics iPad
              partnership. First mover advantage innovator success deployment
              non-disclosure.
            </p>
          </div>
          <div className={styles.heroContainer__buttons}>
            <ButtonPrimary
              content="Buy template"
              type="filled"
              width="24.7rem"
              height="6rem"
              onClick={() => {}}
            />
            <ButtonPrimary
              content="Explore"
              type="outline"
              width="18.7rem"
              height="6rem"
              onClick={() => {}}
            />
          </div>
        </div>
        <div className={styles.heroContainer__images}>
          <Image
            src="/images/Frame-1.svg"
            alt="hero-image"
            width={493}
            height={231}
          />
          <Image
            src="/images/Group-3.svg"
            alt="hero-image"
            width={192}
            height={165}
          />
          <Image
            src="/images/Group-2.svg"
            alt="hero-image"
            width={261}
            height={165}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
