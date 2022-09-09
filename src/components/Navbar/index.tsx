import React from "react";
import Link from "next/link";
import { NavContainer } from "./styles";

export function Navbar () {
  return (
    <NavContainer>
      <Link href={'/'}>
        Home
      </Link>
      <Link href={"/downloads"}>
        Download App
      </Link>
    </NavContainer>
  )
}