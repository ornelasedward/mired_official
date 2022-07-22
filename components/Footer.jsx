import React from "react";
import Image from "next/image";
import Logo from "../assets/Logo.png";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-[#FFF8D9]">
      <div className="max-w-[1240px] m-auto justify-between mt-[6rem] border-b-2 border-[#1E1E1F]">
        <div className="m-auto flex justify-between items-center">
          <div className="sm:ml-2">
            <div className="3xs:w-[6rem] sm:w-[10rem]">
              <Image src={Logo} />
            </div>
            <h4 className="3xs:w-[10rem] 3xs:text-[0.6rem] sm:w-[15rem] mx-2">
              We’re a Texas-based web development company that enjoys bridging
              the gap between businesses and users.
            </h4>
          </div>
          <div className="mr-2">
            <h4 className="text-[#3F0BAF] text-[1.3rem]">contact us</h4>
            <div className="absolute mt-6">
              <AiOutlineMail />
            </div>
            <p className="3xs:text-[0.6rem] border-b-2 border-[#1E1E1F] mb-4 ml-5 mt-5">
              ContactMired@gmail.com
            </p>
            <div className="absolute">
              <BsTelephone />
            </div>
            <p className="3xs:text-[0.6rem] mb-1 ml-5">(469) 619-7722</p>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] m-auto flex justify-between items-center sm:my-4 3xs:p-2">
        <p className="3xs:w-[19rem] 3xs:text-[0.4rem] xxs:text-[0.45rem] xs:text-[.55rem] sm:text-[.8rem] sm:w-[20rem]">
          Copyright © 2022 Mired Web Development
        </p>
        <p className="3xs:w-[17.5rem] sxx:w-[13rem] xxs:w-[20rem] sx:mr-[-2rem] sr:mr-[-1rem] sm:text-[0.78rem] sm:ml-[-2rem] 3xs:text-[0.34rem] xxs:text-[0.45rem] xs:text-[.55rem] sm:text-[.8rem] sm:w-[23rem]">
          All Rights Reserved | Terms and Conditions | Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Footer;
