"use client";
import { useEffect, useState } from "react";
import { getImagesFromS3 } from "@/utils/s3";
import { trashCan } from "@utils/images";
import Image from "next/image";

interface DeleteRowProps {
  folder: string;
  showModal: string;
  setShowModal: (title: string) => void;
  toggleLocked: () => void;
}

function DeleteRow({ folder, setShowModal, toggleLocked }: DeleteRowProps) {
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
    <div>
      {images.map((image) => (
        <div key={image.key}>
          <div className="text-left border-gray-400 border-b-[1px] justify-between flex items-center mb-[20px] pb-[20px]">
            <div className="w-[25%] sm:w-[20%]">
              <img src={image.url} alt={image.key} />
            </div>
            <button
              className=" flex m-8"
              onClick={() => {
                setShowModal(image.key);
                toggleLocked();
              }}
            >
              <Image
                src={trashCan as string}
                alt="menu"
                width={30}
                height={30}
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DeleteRow;
