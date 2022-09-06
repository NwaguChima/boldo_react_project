import Image from "next/image";
import React from "react";
import Heading2 from "../heading2/Heading2";
import styles from "./OurStory.module.scss";

interface OurStoryProps {}

const OurStory: React.FC<OurStoryProps> = ({}) => {
  return (
    <section className={styles.ourStory}>
      <div className={styles.ourStory__images}>
        <div className={styles.box}>
          <Image
            src="/images/story-1.png"
            alt="Our Story"
            width={210}
            height={225}
          />
          <Image
            src="/images/story-4.svg"
            alt="Our Story"
            width={210}
            height={225}
          />
        </div>
        <div className={styles.box}>
          <Image
            src="/images/story-2.png"
            alt="Our Story"
            width={277}
            height={425}
          />
        </div>
        <div className={styles.box}>
          <Image
            src="/images/story-3.svg"
            alt="Our Story"
            width={210}
            height={225}
          />
          <Image
            src="/images/story-5.png"
            alt="Our Story"
            width={210}
            height={225}
          />
        </div>
      </div>
      <Heading2
        text="Our Story"
        heading="Handshake infographic mass market crowdfunding iteration."
        text2="Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. Sales user experience branding growth hacking holy grail monetization conversion prototype stock network effects. Learning curve network effects return on investment bootstrapping business-to-consumer."
      />
    </section>
  );
};

export default OurStory;
