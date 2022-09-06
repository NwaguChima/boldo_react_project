import Image from "next/image";
import Link from "next/link";
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
      <div className={styles.ourServices__box}>
        <div className={styles.ourServices__box__item}>
          <figure>
            <Image
              src="/images/service-1.svg"
              alt="services image"
              height={300}
              width={354}
            />
            <figcaption>Cool feature title</figcaption>
          </figure>
          <Link href="/services">
            <a>Explore page &rarr;</a>
          </Link>
        </div>
        <div className={styles.ourServices__box__item}>
          <figure>
            <Image
              src="/images/service-2.svg"
              alt="services image"
              height={300}
              width={354}
            />
            <figcaption>Even cooler feature</figcaption>
          </figure>
          <Link href="/services">
            <a>Explore page &rarr;</a>
          </Link>
        </div>
        <div className={styles.ourServices__box__item}>
          <figure>
            <Image
              src="/images/service-3.svg"
              alt="services image"
              height={300}
              width={354}
            />
            <figcaption>Cool feature title</figcaption>
          </figure>
          <Link href="/services">
            <a>Explore page &rarr;</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
