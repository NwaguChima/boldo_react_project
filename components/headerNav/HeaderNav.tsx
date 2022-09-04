import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { ButtonPrimary } from "../buttons/ButtonPrimary";
import styles from "./HeaderNav.module.scss";
import { IoCloseOutline, IoMenuSharp } from "react-icons/io5";
import { MobileNav } from "./MobileNav";

interface HeaderNavProps {
  mode: "light" | "dark";
}

const HeaderNav: React.FC<HeaderNavProps> = ({ mode }) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  console.log("isMobileNavOpen", isMobileNavOpen);

  return (
    <nav
      className={`${styles.nav} ${
        mode === "dark" ? styles.dark : styles.light
      }`}
    >
      <Link href="/">
        <a>
          <Image
            src={`/images/${mode == "dark" ? "logo_light" : "logo"}.svg`}
            alt="logo"
            width={100}
            height={42}
          />
        </a>
      </Link>
      <ul className={`${styles.nav__list} `}>
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
            mode={mode}
            onClick={() => {}}
          />
        </li>
      </ul>
      <div className={styles.nav__icons}>
        {!isMobileNavOpen && (
          <IoMenuSharp onClick={() => setIsMobileNavOpen(true)} />
        )}
      </div>
      <div
        className={`${styles.nav__slider} ${
          isMobileNavOpen ? styles.sliderOpen : styles.sliderClose
        }`}
      >
        <MobileNav mode={mode} setNav={setIsMobileNavOpen} />
      </div>
    </nav>
  );
};

export default HeaderNav;
