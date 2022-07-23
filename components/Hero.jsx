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
        <h1 className="3xs:text-2xl xs:text-4xl text-center mt-[8rem] block mid:hidden mb-[2rem]">
          we design and develop <br /> responsive websites <br /> and mobile
          applications.
        </h1>
        <p className="3xs:text-xs xs:text-lg font-bold text-center block mid:hidden mb-[1rem]">
          contact us to book a consultation on how we <br /> can help scale your
          business.
        </p>
        <div className="flex w-full justify-center">
          <div className="button-2 mid:hidden w-[8rem]">
            <Link href="#contact">contact us</Link>
          </div>
        </div>

        <div className="absolute rotate-[-25deg] mt-[-5rem] 3xs:ml-9 sxx:ml-[4rem] xxs:ml-[5rem] xs:ml-[8rem] sx:ml-[11rem] sr:ml-[14rem] mid:hidden w-[35px]">
          <Image src={Arrow} />
        </div>
        <div className="mt-[5rem] 3xs:block px-10 mid:hidden">
          <Image src={First} />
        </div>
      </div>

      {/* Desktop  */}
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-6 pb-[2rem]">
        <div className="">
          <h1 className="mid:text-3xl lgr:text-4xl mid:mb-6 le:mb-9 lgr:mb-12 3xs:hidden mid:mt-[8rem] le:mt-[4rem] lgr:mt-[3rem] mid:block mid:text-left">
            we design and <br /> develop responsive <br /> websites and mobile
            <br /> applications.
          </h1>
          <p className="lgr:mb-11 font-bold 3xs:hidden lgr:block">
            contact us to book a consultation on how we can <br /> help scale
            your business.
          </p>
          <p className="3xs:hidden mid:block lgr:hidden font-bold mb-5">
            contact us to book a consultation <br /> on how we can help scale
            your business.
          </p>

          <div className="3xs:hidden mid:inline-block button-2">
            <Link href="#contact">contact us</Link>
          </div>
        </div>
        <div className="lgr:mt-[9rem] 3xs:hidden lgr:flex">
          <Image src={First} />
        </div>
        <div className="hidden mid:block lgr:hidden mid:w-[500px] le:w-[600px] mid:mt-[8.5rem]">
          <Image src={First} />
        </div>
      </div>
      <div className="max-w-[1320px] m-auto flex">
        <div className="static pr-[2rem] mt-[-17rem] 3xs:hidden xxl:block">
          <Image src={Arrow} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
