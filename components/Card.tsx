import Image from "next/image";

interface CardProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  showModal: string;
  setShowModal: (title: string) => void;
  toggleLocked: () => void;
}

const Card = ({
  imgSrc,
  imgAlt,
  title,
  setShowModal,
  toggleLocked,
}: CardProps) => {
  return (
    <div
      onClick={() => {
        setShowModal(title);
        toggleLocked();
      }}
    >
      <div className="h-[400px] sm:h-[500px] xl:h-[600px] rounded-xl shadow-md transition duration-500 hover:scale-105 cursor-pointer">
        <div className="relative">
          <div className="rounded-xl absolute w-full h-[400px] sm:h-[500px] xl:h-[600px] text-gray-200 bg-gradient-to-t from-black/70 from-10% via-black/20 via-30% to-black/0 to-90%">
            <h1 className="absolute font-montserrat text-3xl flex bottom-5 inset-x-0 justify-center">
              {title}
            </h1>
          </div>
          <Image
            src={imgSrc}
            alt={imgAlt}
            className="w-full h-[400px] sm:h-[500px] xl:h-[600px] object-cover rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
