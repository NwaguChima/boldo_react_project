import React from "react";
import Heading2 from "../heading2/Heading2";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import styles from "./Enterprise.module.scss";

interface EnterpriseProps {}

const Enterprise: React.FC<EnterpriseProps> = ({}) => {
  return (
    <section className={styles.enterprise}>
      <div className={styles.enterprise__header}>
        <Heading2
          heading="An enterprise template to ramp up your company website"
          mode="dark"
        />
        <div>
          <BsArrowLeftShort />
          <BsArrowRightShort />
        </div>
      </div>
    </section>
  );
};

export default Enterprise;
