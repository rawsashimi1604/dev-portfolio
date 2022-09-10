import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { BsDot } from "react-icons/bs";

const menu = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Experiences",
    href: "/experience",
  },
  {
    label: "Projects",
    href: "/projects",
  },
];

function Navbar() {
  const router = useRouter();

  return (
    <nav className="font-raleway sticky top-0 z-50 p-4  bg-white flex justify-between">
      {/* logo */}
      <Link href="/">
        <a className="font-extrabold">GAVIN LOO</a>
      </Link>


      {/* Menu */}
      <ul className="hidden md:flex gap-4 text-xs font-bold uppercase">
        {menu.map((menuItem, i) => {
          return (
            <li className="relative">
              <Link href={menuItem.href}>
                <a>{menuItem.label}</a>
              </Link>
              
              {/* Interactive dot */}
              {router.pathname === menuItem.href && (
                <BsDot
                  className="animate__animated animate__slow animate__fadeIn absolute left-[50%] -bottom-3.5 h-7 w-7"
                  style={{
                    transform: "translate(-50%, 0)",
                  }}
                />
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
