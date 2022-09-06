import Image from "next/image";
import React from "react";
import ButtonPrimary from "../buttons/ButtonPrimary";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { FiFeather, FiEye, FiSun } from "react-icons/fi";
import styles from "./Connect.module.scss";

interface ConnectProps {}

const Connect: React.FC<ConnectProps> = ({}) => {
  return (
    <section className={styles.connect}>
      <div className={styles.connect__container}>
        <div className={styles.connect__container__item}>
          <Image
            src="/images/connect-1.png"
            alt="Connect"
            height={610}
            width={498}
          />
          <div className={styles.connect__details}>
            <h3>
              We connect our customers with the best, and help them keep up-and
              stay open.
            </h3>
            <div className={styles.connect__details__holder}>
              <div className={styles.connect__line}>
                <i>
                  <IoCheckmarkCircleSharp />
                </i>
                <p>We connect our customers with the best.</p>
              </div>
              <div className={styles.connect__line}>
                <i>
                  <IoCheckmarkCircleSharp />
                </i>
                <p>Advisor success customer launch party.</p>
              </div>
              <div className={styles.connect__line}>
                <i>
                  <IoCheckmarkCircleSharp />
                </i>
                <p>Business-to-consumer long tail.</p>
              </div>
            </div>

            <ButtonPrimary
              content="Start now"
              height="6rem"
              width="21rem"
              mode="light"
              type="filled"
              onClick={() => {}}
            />
          </div>
        </div>
        <div className={styles.connect__container__item}>
          <div className={styles.connect__details}>
            <h3>
              We connect our customers with the best, and help them keep up-and
              stay open.
            </h3>
            <div className={styles.connect__details__holder}>
              <div className={styles.connect__line2}>
                <i>
                  <FiFeather />
                </i>
                <p>We connect our customers with the best.</p>
              </div>
              <div className={styles.connect__line2}>
                <i>
                  <FiEye />
                </i>
                <p>Advisor success customer launch party.</p>
              </div>
              <div className={styles.connect__line2}>
                <i>
                  <FiSun />
                </i>
                <p>Business-to-consumer long tail.</p>
              </div>
            </div>
          </div>
          <Image
            src="/images/connect-2.png"
            alt="Connect"
            height={610}
            width={498}
          />
        </div>
      </div>
    </section>
  );
};

export default Connect;
