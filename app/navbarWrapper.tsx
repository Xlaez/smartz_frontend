"use client";
import { usePathname } from "next/navigation";
import React from "react";
import { CreatorNavBar } from "./creator/components/Navbar";
import { NavBar } from "@/components/navbar";

const NavbarWrapper = () => {
  const pathname = usePathname();

  const isCreatorPage = pathname.startsWith("/creator");
  return isCreatorPage ? <CreatorNavBar /> : <NavBar />;
};

export default NavbarWrapper;
