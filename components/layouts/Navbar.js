import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { BsDot } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

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

  // Controls Mobile Hamburger menu state
  const [showMenu, setShowMenu] = useState(false);

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
            <li className="relative" key={i}>
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

      {/* Mobile hamburger control */}
      {!showMenu && (
        <GiHamburgerMenu
          className="w-6 h-6 md:hidden"
          onClick={() => setShowMenu(true)}
        />
      )}

      {showMenu && (
        <div className="md:hidden">
          {/* Mobile Menu Mask */}
          <div className="fixed bg-gray-300 top-0 right-0 w-screen h-screen opacity-50"></div>

          {/* Mobile Menu */}
          <ul className="fixed bg-white top-0 right-0 w-4/5 h-screen z-50 shadow p-4 flex flex-col gap-2 animate__animated animate__fadeInRight">
            <ImCross
              className="absolute right-5 w-6 h-6"
              onClick={() => setShowMenu(false)}
            />

            {menu.map((menuItem, i) => {
              return (
                <li key={i}>
                  <Link href={menuItem.href}>
                    <a
                      className={`font-bold uppercase text-3xl ${
                        router.pathname === menuItem.href
                          ? "text-black"
                          : "text-gray-500"
                      }`}
                      onClick={() => setShowMenu(false)}
                    >
                      {menuItem.label}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
