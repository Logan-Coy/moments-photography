import Image from "next/image";

import { logo2White } from "@utils/images";

import { navLinks } from "@constants";

const Footer = () => {
  return (
    <>
      <div className="w-full flex py-6 justify-between items-center px-8 bg-black">
        <div className="flex w-[40%] xs:w-[30%] sm:w-[20%] md:w-[15%] lg:w-[10%]  h-full">
          <Image src={logo2White} alt="Moments by Kerri Coy" />
        </div>
        <ul className="list-none flex justify-end items-center flex-1">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className="font-montserrat font-normal cursor-pointer text-[12px] hover:scale-105 text-white mx-2"
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex bg-black justify-center">
        <p className="flex text-white opacity-70 font-montserrat text-[10px] items-center text-center mb-4">
          © 2023 | Moments by Kerri Coy, Ashtabula, OH 44048, U.S.A |
          www.momentsbykerricoy.com
        </p>
      </div>
    </>
  );
};

export default Footer;
