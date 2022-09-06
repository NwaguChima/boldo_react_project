import React from "react";
import Heading2 from "../heading2/Heading2";
import styles from "./OurNumbers.module.scss";

interface OurNumbersProps {}

const OurNumbers: React.FC<OurNumbersProps> = ({}) => {
  return (
    <section className={styles.numbers}>
      <Heading2
        text="Our numbers"
        heading="Handshake infographic mass market crowdfunding iteration."
        center
        mode="dark"
      />
      <div className={styles.figures}>
        <div className={styles.figures__item}>
          <span>120m</span>
          <p>Cool feature title</p>
        </div>
        <div className={styles.figures__item}>
          <span>10.000</span>
          <p>Cool feature title</p>
        </div>
        <div className={styles.figures__item}>
          <span>240</span>
          <p>Cool feature title</p>
        </div>
      </div>
    </section>
  );
};

export default OurNumbers;
