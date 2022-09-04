import React from "react";
import styles from "./Button.module.scss";

interface ButtonSecondaryProps {
  content: string;
  width: string;
  height: string;
}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({
  content,
  width,
  height,
}) => {
  return (
    <button
      className={`${styles.button} ${styles.secondary}`}
      style={{ width, height }}
    >
      {content}
    </button>
  );
};

export default ButtonSecondary;
