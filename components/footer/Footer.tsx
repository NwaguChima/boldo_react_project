import React from "react";
import styles from "./Footer.module.scss";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__box}>
        <h2>An enterprise template to ramp up your company website</h2>
        <div>
          <input type="text" placeholder="Your email address" />
          <button>Subscribe</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
