import React from "react";
import styles from "./Footer.module.scss";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__box}>
        <h2>An enterprise template to ramp up your company website</h2>
        <form className={styles.footer__box__form}>
          <input type="email" placeholder="Your email address" />
          <button>Subscribe</button>
        </form>
      </div>
    </footer>
  );
};

export default Footer;
