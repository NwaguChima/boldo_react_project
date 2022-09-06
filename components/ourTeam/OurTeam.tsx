import Image from "next/image";
import React from "react";
import Heading2 from "../heading2/Heading2";
import styles from "./OurTeam.module.scss";

interface OurTeamProps {}

const OurTeam: React.FC<OurTeamProps> = ({}) => {
  return (
    <section className={styles.ourTeam}>
      <Heading2
        text="Our team"
        heading="The leadership team"
        text2="Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. "
      />
      <div className={styles.container}>
        <div className={styles.container__card}>
          <Image
            src="/images/team-1.svg"
            alt="Michael Scott"
            width={270}
            height={318}
          />
          <h4>Michael Scott</h4>
          <p>General Manager</p>
        </div>
        <div className={styles.container__card}>
          <Image
            src="/images/team-2.svg"
            alt="Dwight Schrute"
            width={270}
            height={318}
          />
          <h4>Dwight Schrute</h4>
          <p>General Manager</p>
        </div>
        <div className={styles.container__card}>
          <Image
            src="/images/team-3.svg"
            alt="Jim Halpert"
            width={270}
            height={318}
          />
          <h4>Jim Halpert</h4>
          <p>General Manager</p>
        </div>
      </div>
    </section>
  );
};

export default OurTeam;
