"use client";

import { close } from "@utils/images";
import Image from "next/image";
import { useEffect, useState } from "react";

interface ModalProps {
  visible: string;
  title: string;
  folder: string;
  onClose: () => void;
}

import { getImagesFromS3 } from "../utils/s3";

const Modal = ({ visible, title, onClose, folder }: ModalProps) => {
  if (!visible) return null;

  const [images, setImages] = useState<any[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      const fetchedImages = await getImagesFromS3(folder);
      //@ts-expect-error
      setImages(fetchedImages);
    };

    fetchImages();
  }, []);

  return (
    <div className="fixed inset-0 z-10">
      <span className="absolute inset-0 bg-black/30 backdrop-blur-sm py-10 xs:px-10 px-6 z-10" />
      <div className="z-20 relative py-10 xs:px-10 px-6">
        <div className="bg-white p-2 rounded-t-xl flex justify-center items-center drop-shadow">
          <h1 className="font-montserrat text-2xl flex flex-1 justify-center">
            {title}
          </h1>
          <Image
            src={close as string}
            alt=""
            onClick={onClose}
            height={50}
            className="cursor-pointer"
          />
        </div>

        <div className="grid grid-cols-1 gap-0  max-h-[82vh] overflow-auto">
          <div className="columns-1 sm:columns-2 md:columns-3 gap-0 bg-white ">
            {images?.map((image) => (
              <img
                key={image.key}
                src={image.url}
                alt={image.key}
                className="p-1"
              />
            ))}
          </div>
        </div>
        <div className="p-2 bg-white rounded-b-xl"></div>
      </div>
    </div>
  );
};

export default Modal;
