"use client";

import { useState } from "react";
import { downArrow } from "@utils/images";
import Image from "next/image";

interface DropdownProps {
  heading: string;
  content: string;
}

const DropDown = ({ heading, content }: DropdownProps) => {
  const [toggle, setToggle] = useState(false);

  return (
    <div
      className="text-left cursor-pointer border-black border-b-[1px] justify-between flex items-start mb-[30px] pb-[20px]"
      onClick={() => {
        setToggle((prev) => !prev);
      }}
    >
      <div className="box-border">
        <div className="mb-[12px] text-[20px] font-[700] font-montserrat leading-[30px]">
          {heading}
        </div>
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } font-montserrat text-lg leading-[26px] block`}
        >
          {content}
        </div>
      </div>
      <button
        className="flex flex-shrink-0"
        onClick={() => {
          setToggle((prev) => !prev);
        }}
      >
        <Image
          src={downArrow as string}
          alt="menu"
          width={15}
          height={15}
          onClick={() => {
            setToggle((prev) => !prev);
          }}
          className={`${
            toggle ? "rotate-180 duration-500" : "rotate-0 duration-500"
          }`}
        />
      </button>
    </div>
  );
};

export default DropDown;
