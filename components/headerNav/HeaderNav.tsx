import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ButtonPrimary } from "../buttons/ButtonPrimary";
import styles from "./HeaderNav.module.scss";

interface HeaderNavProps {
  mode: "light" | "dark";
}

const HeaderNav: React.FC<HeaderNavProps> = ({ mode }) => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a>
          <Image src="/images/logo.svg" alt="logo" width={100} height={42} />
        </a>
      </Link>
      <ul
        className={`${styles.nav__list} ${
          mode == "dark" ? styles.dark : styles.light
        }`}
      >
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
        <li>
          <ButtonPrimary
            content="Log In"
            width="12.8rem"
            height="4rem"
            type="outline"
            onClick={() => {}}
          />
        </li>
      </ul>
    </nav>
  );
};

export default HeaderNav;
