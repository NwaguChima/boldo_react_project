import React from "react";

interface ButtonProps {
  content: string;
  width: string;
  height: string;
  background: string;
  color: string;
}

export const Button: React.FC<ButtonProps> = ({
  content,
  width,
  height,
  background,
  color,
}) => {
  return <button>{content}</button>;
};

export default Button;
