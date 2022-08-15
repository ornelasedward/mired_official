import React from "react";
import Image from "next/image";
import Link from "next/link";
import Arrow from "../assets/arrow.png";
import Laptop from "../assets/laptop.png";
import Laptop2 from "../assets/laptop2.png";
import Frame1 from "../assets/Frame1.png";
import group1 from "../assets/group1.png";
import group2 from "../assets/group2.png";

const Hero = () => {
  return (
    <div className="bg-[#FFF8D9]">
      {/* Mobile */}

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

      {/* Desktop  */}
      <div className="max-w-[1240px] m-auto">
        <div className="flex flex-col items-center lg:flex-row mt-[9rem] lg:mt-0">
          <div
            className="mb-[3rem] p-4"
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <h1 className="mid:text-4xl lgr:text-4xl mid:mb-6 le:mb-9 lgr:mb-12 3xs:hidden mid:mt-[-1.5rem] lgr:mt-[3rem] mid:block mid:text-center lg:text-left">
              we design and develop <br /> responsive websites <br /> and mobile
              applications.
            </h1>
            <p className="mid:mb-7 lgr:mb-11 mid:text-lg font-bold 3xs:hidden mid:block mid:text-center lg:text-left">
              contact us to book a consultation on how we <br /> can help scale
              your business.
            </p>

            <div className="3xs:hidden lg:inline-block button-2 ">
              <Link href="#contact">contact us</Link>
            </div>
            <div className="flex w-full justify-center">
              <div className="button-3 3xs:hidden mid:block lg:hidden w-[8rem]">
                <Link href="#contact">contact us</Link>
              </div>
            </div>
          </div>
          <div className="3xs:mt-[-12rem] mid:mt-[-2rem] lg:mt-[8rem] p-4">
            <Image src={Laptop2} />
          </div>
        </div>
      </div>
      <div className="max-w-[1380px] m-auto">
        <div className="static pr-[2rem] pb-[16rem] mt-[-25rem] 3xs:hidden xxxl:block">
          <Image src={Arrow} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
