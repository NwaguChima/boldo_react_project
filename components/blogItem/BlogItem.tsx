import Image from "next/image";
import React from "react";
import { blogDataType } from "../../utils/data";
import styles from "./BlogItem.module.scss";

interface BlogItemProps {
  data: blogDataType;
}

const BlogItem: React.FC<BlogItemProps> = ({ data }) => {
  return (
    <div className={styles.blogItem}>
      <div className={styles.blogItem__top}>
        <Image src={data.image} alt="blog" width={300} height={209} />
        <h6>
          {data.title} <span>{data.date}</span>
        </h6>
        <p>{data.text}</p>
      </div>
      <div className={styles.blogItem__bottom}>
        <figure>
          <Image src={data.authorBadge} alt="blog" width={32} height={32} />
        </figure>
        <figcaption>{data.author}</figcaption>
      </div>
    </div>
  );
};

export default BlogItem;
