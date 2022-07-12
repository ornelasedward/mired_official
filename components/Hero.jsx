import React from "react";
import Image from "next/image";
import First from "../assets/first.png";
import Link from "next/link";
import Arrow from "../assets/arrow.png";
const Hero = () => {
  return (
    <div className="bg-[#FFF8D9]">
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-6 pb-[8rem]">
        <div className="">
          <h1 className="text-4xl mt-[10rem] mb-12">
            we design and <br /> develop responsive <br /> websites and mobile
            <br /> applications.
          </h1>
          <p className="mb-11 font-bold">
            contact us to book a consultation on how we can <br /> help scale
            your business.
          </p>
          <div className="arrow">
            <Image src={Arrow} />
          </div>
          <div className="button-2">
            <Link href="/contact">contact us</Link>
          </div>
        </div>
        <div className="flex mt-[16rem]">
          <Image src={First} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
