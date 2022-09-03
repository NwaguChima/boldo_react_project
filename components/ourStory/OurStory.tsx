/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./OurStory.module.scss";

interface OurStoryProps {}

const OurStory: React.FC<OurStoryProps> = ({}) => {
  return (
    <section>
      <div className={styles.ourStory}>
        <img src="/images/story-1.svg" alt="Our Story" />
        <img src="/images/story-2.svg" alt="Our Story" />
        <img src="/images/story-3.svg" alt="Our Story" />
        <img src="/images/story-4.svg" alt="Our Story" />
        <img src="/images/story-5.svg" alt="Our Story" />
      </div>
    </section>
  );
};

export default OurStory;
