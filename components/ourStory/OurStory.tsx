/* eslint-disable @next/next/no-img-element */
import React from "react";
import AboutHeading2 from "../aboutHeading2/AboutHeading2";
import styles from "./OurStory.module.scss";

interface OurStoryProps {}

const OurStory: React.FC<OurStoryProps> = ({}) => {
  return (
    <section className={styles.ourStory}>
      <div className={styles.ourStory__images}>
        <div className={styles.box}>
          <img src="/images/story-1.svg" alt="Our Story" />
          <img src="/images/story-4.svg" alt="Our Story" />
        </div>
        <div className={styles.box}>
          <img src="/images/story-2.svg" alt="Our Story" />
        </div>
        <div className={styles.box}>
          <img src="/images/story-3.svg" alt="Our Story" />
          <img src="/images/story-5.svg" alt="Our Story" />
        </div>
      </div>
      <AboutHeading2
        text="Our Story"
        heading="Handshake infographic mass market crowdfunding iteration."
        text2="Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. Sales user experience branding growth hacking holy grail monetization conversion prototype stock network effects. Learning curve network effects return on investment bootstrapping business-to-consumer."
      />
    </section>
  );
};

export default OurStory;
