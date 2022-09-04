import React from "react";
import styles from "./Button.module.scss";

interface ButtonSecondaryProps {
  content: string;
  width: string;
  height: string;
  footer?: boolean;
}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({
  content,
  width,
  height,
  footer,
}) => {
  return (
    <button
      className={`${styles.button} ${styles.secondary}`}
      style={{ width, height, fontSize: footer ? ".9rem" : "1.6rem" }}
    >
      {content}
    </button>
  );
};

export default ButtonSecondary;
