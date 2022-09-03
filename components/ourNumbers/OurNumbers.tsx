import React from "react";
import AboutHeading2 from "../aboutHeading2/AboutHeading2";
import sytles from "./OurNumbers.module.scss";

interface OurNumbersProps {}

export const OurNumbers: React.FC<OurNumbersProps> = ({}) => {
  return (
    <section className={sytles.numbers}>
      <AboutHeading2
        text="Our numbers"
        heading="Handshake infographic mass market crowdfunding iteration."
        center
        mode="dark"
      />
    </section>
  );
};
