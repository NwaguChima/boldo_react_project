/* eslint-disable @next/next/no-img-element */
import React from "react";
import AboutHeading2 from "../aboutHeading2/AboutHeading2";
import styles from "./OurTeam.module.scss";

interface OurTeamProps {}

const OurTeam: React.FC<OurTeamProps> = ({}) => {
  return (
    <section className={styles.ourTeam}>
      <AboutHeading2
        text="Our team"
        heading="The leadership team"
        text2="Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. "
      />
      <div className={styles.container}>
        <div className={styles.container__card}>
          <img src="/images/team-1.svg" alt="Michael Scott" />
          <h4>Michael Scott</h4>
          <p>General Manager</p>
        </div>
        <div className={styles.container__card}>
          <img src="/images/team-2.svg" alt="Dwight Schrute" />
          <h4>Dwight Schrute</h4>
          <p>General Manager</p>
        </div>
        <div className={styles.container__card}>
          <img src="/images/team-3.svg" alt="Jim Halpert" />
          <h4>Jim Halpert</h4>
          <p>General Manager</p>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;