import Image from "next/image";
import React from "react";

interface HeaderNavProps {}

const HeaderNav: React.FC<HeaderNavProps> = ({}) => {
  return (
    <nav>
      <Image src="/images/logo.svg" alt="logo" width={100} height={42} />
    </nav>
  );
};

export default HeaderNav;
