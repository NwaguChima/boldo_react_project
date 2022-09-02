import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./HeaderNav.module.scss";

interface HeaderNavProps {}

const HeaderNav: React.FC<HeaderNavProps> = ({}) => {
  return (
    <nav className={styles.nav}>
      <Image src="/images/logo.svg" alt="logo" width={100} height={42} />
      <ul className={styles.nav__list}>
        <li>
          <Link href="/">
            <a>Product</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Services</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>About</a>
          </Link>
        </li>
        <li>Log In</li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
