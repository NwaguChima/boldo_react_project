import React from "react";
import styles from "./Button.module.scss";

interface ButtonPrimaryProps {
  content: string;
  width: string;
  height: string;
  type: "filled" | "outline";
  onClick: () => void;
}

export const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  content,
  width,
  height,
  type,
  onClick,
}) => {
  return (
    <button
      className={`${styles.button} ${styles[type]}`}
      style={{
        width,
        height,
      }}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default ButtonPrimary;
