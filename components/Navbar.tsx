"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import { logo2, menu, close } from "@utils/images";

import { navLinks } from "@constants";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav
      className={`sticky ${
        visible ? "top-0" : ""
      } w-full flex py-6 justify-between items-center px-8 drop-shadow fixed z-10 bg-white`}
    >
      <Image src={logo2} alt="Moments by Kerri Coy" height={50} />

      <ul className="list-none ss:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-montserrat font-normal cursor-pointer text-[16px] hover:scale-105 ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } ${
              index === navLinks.length - 1
                ? "text-white bg-black rounded-md p-[8px] hover:bg-zinc-800"
                : ""
            }`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="ss:hidden">
        <Image
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => {
            setToggle((prev) => !prev);
          }}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[180px] rounded-xl z-10`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1 py-2">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-montserrat text-lg cursor-pointer text-white ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                }`}
              >
                <a
                  href={`#${nav.id}`}
                  onClick={() => {
                    setToggle((prev) => !prev);
                  }}
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
