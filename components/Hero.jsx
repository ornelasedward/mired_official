import React from "react";
import Image from "next/image";
import First from "../assets/first.png";
import Link from "next/link";
import Arrow from "../assets/arrow.png";

const Hero = () => {
  return (
    <div className="bg-[#FFF8D9]">
      {/* Mobile */}
      <div className="">
        <h1 className="3xs:text-2xl xs:text-4xl text-center mt-[8rem] block sm:hidden mb-[2rem]">
          we design and develop <br /> responsive websites <br /> and mobile
          applications.
        </h1>
        <p className="3xs:text-xs xs:text-lg font-bold text-center block sm:hidden mb-[1rem]">
          contact us to book a consultation on how we <br /> can help scale your
          business.
        </p>
        <div className="flex w-full justify-center">
          <div className="button-2 sm:hidden w-[8rem]">
            <Link href="#contact">contact us</Link>
          </div>
        </div>

        <div className="absolute rotate-[-25deg] mt-[-5rem] 3xs:ml-9 sxx:ml-[4rem] xxs:ml-[5rem] xs:ml-[8rem] sx:ml-[11rem] sm:hidden w-[35px]">
          <Image src={Arrow} />
        </div>
        <div className="mt-[5rem] 3xs:block px-10 sm:hidden">
          <Image src={First} />
        </div>
      </div>

      {/* Desktop  */}
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-6 pb-[2rem]">
        <div className="">
          <h1 className="text-4xl mt-[8rem] mb-12 3xs:hidden sm:block sm:text-left">
            we design and <br /> develop responsive <br /> websites and mobile
            <br /> applications.
          </h1>
          <p className="mb-11 font-bold 3xs:hidden sm:block">
            contact us to book a consultation on how we can <br /> help scale
            your business.
          </p>

          <div className="3xs:hidden sm:inline-block button-2">
            <Link href="#contact">contact us</Link>
          </div>
        </div>
        <div className="flex mt-[16rem] 3xs:hidden sm:block">
          <Image src={First} />
        </div>
      </div>
      <div className="max-w-[1320px] m-auto flex">
        <div className="static pr-[2rem] mt-[-18rem] 3xs:hidden xxl:block">
          <Image src={Arrow} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
