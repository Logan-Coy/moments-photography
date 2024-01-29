import React from "react";
import { Dropdown } from "@components";
import { aboutData } from "@constants";
import { momPic } from "@utils/images";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="bg-gray-100">
      <div className="m-4 max-w-[950px] mx-auto xl:max-w-[1200px]">
        <div className="m-6">
          <h2 className="font-montserrat text-4xl py-4 text-center pt-8">
            About
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 place-items-center items-center py-8 border-black border-b-[1px] mb-[30px]">
            <Image
              src={momPic}
              alt="photo of Kerri Coy"
              height={300}
              width={300}
              className="lg:col-span-2 rounded-full"
            />
            <div className="flex-row md:pl-8 col-span-2 lg:col-span-3 py-4 pt-8 md:pt-4">
              <div className="border-[1px] border-black rounded-lg">
                <h3 className="text-4xl text-center font-montserrat font-semibold py-4 px-4 leading-[50px]">
                  Preserving your precious moments through my lens
                </h3>
                <p className="font-montserrat text-lg text-center pb-4 px-4 leading-[30px]">
                  Hi! I&apos;m Kerri Coy, and I&apos;m all about capturing
                  life&apos;s beautiful stories with my camera. As a
                  photographer based in Ashtabula, Ohio, I&apos;ve found my
                  passion in freezing fleeting moments, turning them into
                  cherished memories you can hold on to.
                </p>
              </div>
            </div>
          </div>
          {aboutData.map((data) => (
            <Dropdown
              key={data.heading}
              heading={data.heading}
              content={data.content}
            />
          ))}
        </div>
      </div>
      <div className="bg-black border-2 border-transparent">
        <div className="text-xl xs:text-2xl ss:text-3xl  font-montserrat py-8 text-center text-white">
          <h3 className="pb-4">Freezing Moments - Warming Hearts</h3>
          <h3>Ashtabula, Ohio</h3>
        </div>
      </div>
    </section>
  );
};

export default About;
