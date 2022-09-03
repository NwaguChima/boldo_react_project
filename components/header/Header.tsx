import React from "react";
import HeaderNav from "../headerNav/HeaderNav";
import styles from "./Header.module.scss";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <header className={styles.header}>
      <HeaderNav />
    </header>
  );
};

export default Header;
