import React from "react";
import styles from "./AboutHeading2.module.scss";

interface AboutHeading2Props {
  text: string;
  heading: string;
  text2?: string;
  mode?: "light" | "dark";
  center?: boolean;
}

const AboutHeading2: React.FC<AboutHeading2Props> = ({
  text,
  heading,
  text2,
  mode,
  center,
}) => {
  return (
    <div
      className={`${styles.secondaryHeading} ${
        mode === "dark" ? styles.dark : ""
      } ${center ? styles.center : ""}`}
    >
      <p>{text}</p>
      <h2>{heading}</h2>
      <p>{text2}</p>
    </div>
  );
};
export default AboutHeading2;
