import React from "react";
import Heading2 from "../heading2/Heading2";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import styles from "./Enterprise.module.scss";
import Image from "next/image";

interface EnterpriseProps {}

const Enterprise: React.FC<EnterpriseProps> = ({}) => {
  return (
    <section className={styles.enterprise}>
      <div className={styles.enterprise__header}>
        <Heading2
          heading="An enterprise template to ramp up your company website"
          mode="dark"
        />
        <div className={styles.enterprise__header__icon}>
          <i className={styles.left}>
            <BsArrowLeftShort />
          </i>
          <i className={styles.right}>
            <BsArrowRightShort />
          </i>
        </div>
      </div>
      <div className={styles.enterprise__body}>
        <div className={styles.enterprise__content}>
          <p>
            “Buyer buzz partner network disruptive non-disclosure agreement
            business”
          </p>
          <div className={styles.enterprise__profile}>
            <Image
              src="/images/ent-1.png"
              alt="avater"
              height={58}
              width={58}
            />
            <div className={styles.enterprise__profile__details}>
              <p>Albus Dumbledore</p>
              <span>Manager @ Howarts</span>
            </div>
          </div>
        </div>

        <div className={styles.enterprise__content}>
          <p>
            “Learning curve infrastructure value proposition advisor strategy
            user experience hypotheses investor.”
          </p>
          <div className={styles.enterprise__profile}>
            <Image
              src="/images/ent-2.png"
              alt="avater"
              height={58}
              width={58}
            />
            <div className={styles.enterprise__profile__details}>
              <p>Severus Snape</p>
              <span>Manager @ Slytherin</span>
            </div>
          </div>
        </div>

        <div className={styles.enterprise__content}>
          <p>
            “Release facebook responsive web design business model canvas seed
            money monetization.”
          </p>
          <div className={styles.enterprise__profile}>
            <Image
              src="/images/ent-3.png"
              alt="avater"
              height={58}
              width={58}
            />
            <div className={styles.enterprise__profile__details}>
              <p>Harry Potter</p>
              <span>Team Leader @ Gryffindor</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enterprise;
