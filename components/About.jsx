import React from "react";
import Link from "next/link";
import Image from "next/image";
import Line1 from "../assets/line 1.png";
import Line2 from "../assets/line 2.png";
import Art from "../assets/art.png";
import Market from "../assets/market.png";

const About = () => {
  return (
    <div className="bg-[#63B4F7]">
      <div className="max-w-[1240px] m-auto">
        <div className="p-4 py-[5rem]">
          <div className="text-4xl lg:mx-[4rem] mb-11">
            <h1>
              Hi, we&apos;re
              <span className="bg-[#F7BE08] pl-1 pr-6">Mired</span>
            </h1>
            <h4 className="text-2xl">Mir•ed</h4>
          </div>

          <div className="relative md:flex items-center px-[10rem] lg:px-[18rem] hidden">
            <div className="flex-grow border-t-2 border-black"></div>

            <h4 className="flex-shrink mx-4 font-bold text-3xl">2 in 1</h4>

            <div className="flex-grow border-t-2 border-black"></div>
          </div>

          <ul className="md:flex md:px-6 p-2">
            <li className="bg-[#FFF8D9] border-2 border-black rounded-2xl inline-block w-full md:w-1/2 mr-4 le:mr-11 lgr:mx-[2rem] h-[29rem] md:h-[33rem] drop-shadow-[5px_4px_0px_rgb(30,30,31)]">
              <div className="hidden">
                <Image src={Line1} />
              </div>
              <div className="text-center p-2">
                <Image src={Art} />
              </div>
              <div className="p-2">
                <h1 className="text-center text-lg xrs:text-2xl md:text-lg mr:text-2xl lr:text-4xl le:p-2">
                  vamp up your site!
                </h1>
                <h4 className="text-center xxs:text-left xrs:text-lg md:text-md le:text-lg xrs:px-6 md:px-0 le:px-5">
                  in the new age of technology, your website is the first
                  impression you make with your users. we make sure it&apos;s a
                  good one by helping passionate brick-and-mortar businesses
                  through mobile and desktop friendly UX/UI designs.
                </h4>
              </div>
            </li>
            <li className="bg-[#FFF8D9] border-2 border-black rounded-2xl inline-block w-full md:w-1/2 mr-4 le:mr-11 lgr:mx-[2rem] h-[29rem] md:h-[33rem] drop-shadow-[5px_4px_0px_rgb(30,30,31)]">
              <div className="hidden">
                <Image src={Line2} />
              </div>

              <div className="text-center p-2">
                <Image src={Market} />
              </div>

              <div className="p-2">
                <h1 className="text-center text-lg xrs:text-2xl md:text-lg mr:text-2xl lr:text-4xl le:p-2">
                  market your business
                </h1>
                <h4 className="text-center xxs:text-left xrs:text-lg md:text-md le:text-lg xrs:px-6 md:px-0 le:px-5">
                  already have a great website? no problemo! we specialize in
                  paid social, email/sms marketing, influencer marketing
                  strategies, seo, and content creation to ensure your business
                  will be found.
                  <br />
                  <br />
                </h4>
              </div>
            </li>
          </ul>
          <div className="p-4 mt-11">
            <h1 className="text-2xl mx-8">
              You need a small, smart, and flexible team to push your brand to
              the next level and work as an extension of your team.{" "}
              <span className="bg-[#F7BE08] pl-1 pr-6">Don&apos;t you?</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
