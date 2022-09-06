import Image from "next/image";
import React from "react";
import styles from "./BlogItem.module.scss";

interface BlogItemProps {}

const BlogItem: React.FC<BlogItemProps> = ({}) => {
  return (
    <div className={styles.blogItem}>
      <div className={styles.blogItem__top}>
        <Image src="/images/grid-1.svg" alt="blog" width={300} height={209} />
        <h6>
          Category <span>November 22, 2021</span>
        </h6>
        <p>Pitch termsheet backing validation focus release.</p>
      </div>
      <div className={styles.blogItem__bottom}>
        <figure>
          <Image src="/images/grid-1-1.svg" alt="blog" width={32} height={32} />
        </figure>
        <figcaption>Chandler Bing</figcaption>
      </div>
    </div>
  );
};

export default BlogItem;
