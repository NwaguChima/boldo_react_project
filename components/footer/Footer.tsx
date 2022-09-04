import Image from "next/image";
import Link from "next/link";
import React from "react";
import ButtonSecondary from "../buttons/ButtonSecondary";
import styles from "./Footer.module.scss";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__box}>
        <h2>An enterprise template to ramp up your company website</h2>
        <form className={styles.footer__box__form}>
          <input type="email" placeholder="Your email address" />
          <ButtonSecondary content="start now" width="21rem" height="4rem" />
        </form>
      </div>
      <div className={styles.footer__list}>
        <div className={styles.footer__list__logo}>
          <Image
            src="/images/logo.svg"
            alt="Boldo-logo"
            width={126}
            height={41}
          />
          <p>
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </p>
          <p>All rights reserved.</p>
        </div>
        <div className={styles.footer__list__links}>
          <div className={styles.footer__items}>
            <h3>Landings</h3>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <a>Products</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a>Services</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer__items}>
            <h3>Company</h3>
            <ul>
              <li>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li className={styles.careers}>
                <Link href="/products">
                  <a>Careers</a>
                </Link>
                <span>Hiring</span>
              </li>
              <li>
                <Link href="/services">
                  <a>Services</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.footer__items}>
            <h3>Resources</h3>
            <ul>
              <li>
                <Link href="/blog">
                  <a>Blog</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Products</a>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <a>Services</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
