import React from "react";
import Image from "next/image";
import Logo from "../assets/Logo.png";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-[#FFF8D9]">
      <div className="max-w-[1240px] m-auto justify-between p-6 mt-[10rem] border-b-2 border-[#1E1E1F]">
        <div className="m-auto flex justify-between items-center">
          <div>
            <div className="w-[10rem]">
              <Image src={Logo} />
            </div>
            <h4 className="w-[15rem]">
              We’re a Texas-based web development company that enjoys bridging
              the gap between businesses and users.
            </h4>
          </div>
          <div>
            <h4 className="text-[#3F0BAF] text-[1.3rem]">contact us</h4>
            <div className="absolute mt-6">
              <AiOutlineMail />
            </div>
            <p className="border-b-2 border-[#1E1E1F] mb-4 ml-5 mt-5">
              ContactMired@gmail.com
            </p>
            <div className="absolute mt-1">
              <BsTelephone />
            </div>
            <p className="mb-1 ml-5 ">(469) 619-7722</p>
          </div>
        </div>
      </div>
      <div className="max-w-[1240px] m-auto flex justify-between items-center my-4">
        <p>Copyright © 2022 Mired Web Development</p>
        <p>All Rights Reserved | Terms and Conditions | Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
