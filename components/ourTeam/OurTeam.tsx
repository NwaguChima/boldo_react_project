import React from "react";
import AboutHeading2 from "../aboutHeading2/AboutHeading2";
import styles from "./OurTeam.module.scss";

interface OurTeamProps {}

export const OurTeam: React.FC<OurTeamProps> = ({}) => {
  return (
    <section className={styles.ourTeam}>
      <AboutHeading2
        text="Our team"
        heading="The leadership team"
        text2="Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. "
      />
    </section>
  );
};
