import Image from "next/image";
import React from "react";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import BlogItem from "../blogItem/BlogItem";
import ButtonPrimary from "../buttons/ButtonPrimary";
import Heading2 from "../heading2/Heading2";
import { blogData } from "../../utils/data";
import styles from "./OurBlog.module.scss";

interface OurBlogProps {}

const OurBlog: React.FC<OurBlogProps> = ({}) => {
  const [range, setRange] = React.useState<number>(3);

  return (
    <section className={styles.blog}>
      <div className={styles.blog__top}>
        <Image
          src="/images/blog_cover.png"
          alt="blog"
          width={1100}
          height={403}
        />
        <div className={styles.blog__top__text}>
          <h3>
            We connect our customers with the best, and help them keep up-and
            stay open.
          </h3>
          <div className={styles.stack}>
            <div className={styles.stack__item}>
              <p>We connect our customers with the best?</p>
              <i>
                <IoCheckmarkCircleSharp />
              </i>
            </div>
            <div className={styles.stack__item}>
              <p>Android research & development rockstar? </p>
              <i>
                <IoCheckmarkCircleSharp />
              </i>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.blog__bottom}>
        <Heading2
          text="Our Blog"
          heading="Value proposition accelerator product management venture"
          center
        />
        <div className={styles.blog__bottom__list}>
          {blogData.slice(0, range).map((item, index) => (
            <BlogItem key={index} data={item} />
          ))}
        </div>
        <ButtonPrimary
          content="Load more"
          mode="light"
          width="21rem"
          height="6rem"
          type="outline"
          onClick={() => {
            setRange(range + 3);
          }}
        />
      </div>
    </section>
  );
};

export default OurBlog;
