import Image from "next/image";
import React from "react";
import AboutHeading2 from "../aboutHeading2/AboutHeading2";
import styles from "./OurValues.module.scss";

interface OurValuesProps {}

const OurValues: React.FC<OurValuesProps> = ({}) => {
  return (
    <section className={styles.values}>
      <AboutHeading2
        text="Our values"
        heading="Things in we believe"
        text2="Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. "
        mode="dark"
      />
      <div className={styles.values__container}>
        <div className={styles.values__container__item}>
          <Image
            src="/images/values-1.svg"
            alt="We believe in"
            height={150}
            width={150}
          />
          <div className={styles.value__text}>
            <h4>We are commited.</h4>
            <p>
              Conversion angel investor entrepreneur first mover advantage.
              Handshake infographic mass market crowdfunding iteration.{" "}
            </p>
          </div>
        </div>
        <div className={styles.values__container__item}>
          <Image
            src="/images/values-2.svg"
            alt="We believe in"
            height={150}
            width={150}
          />
          <div className={styles.value__text}>
            <h4>We are responsible.</h4>
            <p>
              Conversion angel investor entrepreneur first mover advantage.
              Handshake infographic mass market crowdfunding iteration.
            </p>
          </div>
        </div>
        <div className={styles.values__container__item}>
          <Image
            src="/images/values-3.svg"
            alt="We believe in"
            height={150}
            width={150}
          />
          <div className={styles.value__text}>
            <h4>We aim for progress.</h4>
            <p>
              Conversion angel investor entrepreneur first mover advantage.
              Handshake infographic mass market crowdfunding iteration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
