"use client";

import { useState } from "react";
import { downArrow } from "@utils/images";
import Image from "next/image";
import { DeleteRow, DeleteModal } from "@components/admin";
import { useLockBodyScroll, useToggle } from "react-use";

interface DropdownProps {
  heading: string;
  folder: string;
}

const DeleteDropDown = ({ heading, folder }: DropdownProps) => {
  const [showModal, setShowModal] = useState("");
  const [locked, toggleLocked] = useToggle(false);
  const [dropToggle, setDropToggle] = useState(false);

  useLockBodyScroll(locked);

  return (
    <div>
      <div
        className="text-left cursor-pointer border-black border-b-[1px] justify-between flex items-start mb-[30px] pb-[20px]"
        onClick={() => {
          setDropToggle((prev) => !prev);
        }}
      >
        <div className="box-border">
          <div className="mb-[12px] text-[20px] font-[700] font-montserrat leading-[30px]">
            {heading}
          </div>
          <div
            className={`${
              dropToggle ? "flex" : "hidden"
            } font-montserrat text-lg leading-[26px]`}
          >
            {/* Map through folder images using DeleteRow Component */}
            <DeleteRow
              folder={folder}
              showModal={showModal}
              setShowModal={setShowModal}
              toggleLocked={toggleLocked}
            />
          </div>
        </div>

        <button
          className="flex flex-shrink-0"
          onClick={() => {
            setDropToggle((prev) => !prev);
          }}
        >
          <Image
            src={downArrow as string}
            alt="menu"
            width={15}
            height={15}
            onClick={() => {
              setDropToggle((prev) => !prev);
            }}
            className={`${
              dropToggle ? "rotate-180 duration-500" : "rotate-0 duration-500"
            }`}
          />
        </button>
      </div>
      <DeleteModal
        visible={showModal}
        onClose={() => {
          setShowModal("");
          toggleLocked();
        }}
      />
    </div>
  );
};

export default DeleteDropDown;
