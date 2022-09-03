import React from "react";
import ButtonPrimary from "../buttons/ButtonPrimary";
import HeaderNav from "../headerNav/HeaderNav";
import styles from "./Header.module.scss";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header className={styles.header}>
      <HeaderNav />
      <div className="heroContainer">
        <div className="heroContainer__items">
          <div className="heroContainer__headingText">
            <h1>Save time by building fast with Boldo Template </h1>
            <p>
              Funding handshake buyer business-to-business metrics iPad
              partnership. First mover advantage innovator success deployment
              non-disclosure.
            </p>
          </div>
          <div className="heroContainer__buttons">
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
        <div className="heroContainer__images"></div>
      </div>
    </header>
  );
};

export default Header;
