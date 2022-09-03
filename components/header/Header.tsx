import React from "react";
import HeaderNav from "../headerNav/HeaderNav";
import styles from "./Header.module.scss";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header className={styles.header}>
      <div className={styles.header__circle}>&nbsp;</div>
      <HeaderNav />
    </header>
  );
};

export default Header;
