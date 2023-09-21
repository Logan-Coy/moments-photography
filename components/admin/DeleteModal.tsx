"use client";

import { close } from "@utils/images";
import { deletePhoto } from "@utilss3";
import Image from "next/image";
import { useState } from "react";

interface DeleteModalProps {
  visible: string;
  onClose: () => void;
}

const DeleteModal = ({ visible, onClose }: DeleteModalProps) => {
  if (!visible) return null;

  const [toggle, setToggle] = useState(false);

  const onDelete = async (fileKey: string) => {
    await deletePhoto(fileKey);
    setToggle(true);
  };

  return (
    <div className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full  grid grid-cols-1 place-items-center">
      <span className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
      <div className="relative p-4 w-full max-w-md h-full md:h-auto">
        <div className="relative p-4 text-center bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
          <button
            type="button"
            className="text-gray-400 absolute top-2.5 right-2.5 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <Image
              src={close as string}
              alt=""
              onClick={onClose}
              height={30}
              width={30}
              className="cursor-pointer"
            />
          </button>
          <svg
            className="text-gray-400 dark:text-gray-500 w-11 h-11 mb-3.5 mx-auto"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          <p
            className={`${
              toggle ? "hidden" : "block"
            } mb-4 text-gray-500 dark:text-gray-300`}
          >
            Are you sure you want to delete this item?
          </p>
          <div
            className={`${
              toggle ? "hidden" : "flex"
            } flex justify-center items-center space-x-4`}
          >
            <button
              type="button"
              className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              onClick={onClose}
            >
              No, cancel
            </button>
            <button
              type="submit"
              className="py-2 px-3 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-500 dark:hover:bg-red-600 dark:focus:ring-red-900"
              onClick={() => {
                onDelete(visible);
              }}
            >
              Yes, I'm sure
            </button>
          </div>
          {/* Delete successfull*/}
          <div className={`${toggle ? "block" : "hidden"} p-5`}>
            <div className={`${toggle ? "block" : "hidden"}`}>
              <h3
                className={`${
                  toggle ? "block" : "hidden"
                } font-montserrat text-green-600 w-full text-center rounded-lg text-lg py-2 pb-4`}
              >
                Delete Successful
              </h3>
              <button
                type="button"
                className="py-2 px-3 text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                onClick={onClose}
              >
                Okay!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
