import Link from "next/link";
import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import ButtonPrimary from "../buttons/ButtonPrimary";

interface MobileNavProps {
  mode: "light" | "dark";
  setNav: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MobileNav: React.FC<MobileNavProps> = ({ mode, setNav }) => {
  return (
    <>
      <i>
        <IoCloseOutline onClick={() => setNav(false)} />
      </i>

      <ul>
        <li>
          <Link href="/about">
            <a>Product</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
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
