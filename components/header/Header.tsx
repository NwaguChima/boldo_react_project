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
              mode="light"
              onClick={() => {}}
            />
            <ButtonPrimary
              content="Explore"
              type="outline"
              width="18.7rem"
              height="6rem"
              mode="light"
              onClick={() => {}}
            />
          </div>
        </div>
        <div className={styles.heroContainer__image}>
          <Image
            src="/images/HeroGraphics.svg"
            alt="hero-image"
            width={500}
            height={423}
          />
        </div>
      </div>
      <div className={styles.header__logos}>
        <Image
          src="/images/Logo.svg"
          alt="logo images"
          width={145}
          height={42}
        />
        <Image
          src="/images/preston_logo.svg"
          alt="logo images"
          width={145}
          height={42}
        />
        <Image
          src="/images/Logo.svg"
          alt="logo images"
          width={145}
          height={42}
        />
        <Image
          src="/images/preston_logo.svg"
          alt="logo images"
          width={145}
          height={42}
        />
        <Image
          src="/images/Logo.svg"
          alt="logo images"
          width={145}
          height={42}
        />
        <Image
          src="/images/preston_logo.svg"
          alt="logo images"
          width={145}
          height={42}
        />
      </div>
    </header>
  );
};

export default Header;
