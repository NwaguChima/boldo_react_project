import React from "react";
import styles from "./AboutHeading2.module.scss";

interface AboutHeading2Props {
  text: string;
  heading: string;
  text2: string;
}

const AboutHeading2: React.FC<AboutHeading2Props> = ({
  text,
  heading,
  text2,
}) => {
  return (
    <div className={styles.secondaryHeading}>
      <p>{text}</p>
      <h2>{heading}</h2>
      <p>{text2}</p>
    </div>
  );
};
export default AboutHeading2;
