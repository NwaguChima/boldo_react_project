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
    </section>
  );
};

export default OurValues;
