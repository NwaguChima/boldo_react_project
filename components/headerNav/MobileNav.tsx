import Link from "next/link";
import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import ButtonPrimary from "../buttons/ButtonPrimary";
import styles from "./HeaderNav.module.scss";

interface MobileNavProps {
  mode: "light" | "dark";
}

export const MobileNav: React.FC<MobileNavProps> = ({ mode }) => {
  return (
    <>
      <i>
        <IoCloseOutline />
      </i>

      <ul>
        <li>
          <Link href="/product">
            <a>Product</a>
          </Link>
        </li>
        <li>
          <Link href="/services">
            <a>Services</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <ButtonPrimary
            content="Log In"
            width="12.8rem"
            height="4rem"
            type={mode === "dark" ? "outline" : "filled"}
            mode={mode}
            onClick={() => {}}
          />
        </li>
      </ul>
    </>
  );
};
