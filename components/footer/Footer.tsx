import Image from "next/image";
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
      <div className="footer__list">
        <div className="footer__list__logo">
          <Image
            src="/images/logo.svg"
            alt="Boldo-logo"
            width={156}
            height={41}
          />
          <p>
            Social media validation business model canvas graphical user
            interface launch party creative facebook iPad twitter.
          </p>
          <p>All rights reserved.</p>
        </div>
        <div className="footer__list__links">
          <div className="footer__items">
            <h3>Landings</h3>
            <ul>
              <li>Home</li>
              <li>Products</li>
              <li>Services</li>
            </ul>
          </div>
          <div className="footer__items">
            <h3>Company</h3>
            <ul>
              <li>Home</li>
              <li>
                Careers <span>Hiring</span>
              </li>
              <li>Services</li>
            </ul>
          </div>
          <div className="footer__items">
            <h3>Resources</h3>
            <ul>
              <li>Blog</li>
              <li>Products</li>
              <li>Services</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
