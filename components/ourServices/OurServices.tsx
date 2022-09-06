import React from "react";
import Heading2 from "../heading2/Heading2";
import styles from "./OurServices.module.scss";

interface OurServicesProps {}

const OurServices: React.FC<OurServicesProps> = ({}) => {
  return (
    <section className={styles.ourServices}>
      <Heading2
        text="Our services"
        heading="Handshake infographic mass market crowdfunding iteration."
        mode="dark"
        center
      />
    </section>
  );
};

export default OurServices;
