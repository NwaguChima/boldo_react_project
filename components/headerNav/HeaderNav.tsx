import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./HeaderNav.module.scss";

interface HeaderNavProps {}

const HeaderNav: React.FC<HeaderNavProps> = ({}) => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a>
          <Image src="/images/logo.svg" alt="logo" width={100} height={42} />
        </a>
      </Link>
      <ul className={styles.nav__list}>
        <li>
          <Link href="/product">
            <a>Product</a>
          </Link>
        </li>
        <li>
          <Link href="/services">
            <a>Services</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>Log In</li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
