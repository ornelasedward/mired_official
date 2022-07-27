import React from "react";
import Image from "next/image";
import Lemon from "../assets/lemonade.png";
import Travel from "../assets/travel.png";
import MJ from "../assets/mj.png";
import { BsArrow90DegUp } from "react-icons/bs";
import Link from "next/link";

const Portfolio = () => {
  return (
    <div id="Portfolio" className="bg-[#92C2EB] py-8">
      <div className="text-center text-4xl py-4 m-1">
        <h1>our work</h1>
      </div>
      <div className="max-w-[1240px] m-auto">
        <ul className="flex justify-content">
          <li className="3xs:hidden sx:block m-4 w-full h-[450px] overflow-hidden overflow-y-scroll border-4 border-[#1E1E1F] bg-[#88EB8C] drop-shadow-[9px_8px_0px_rgb(30,30,31)] p-2">
            <Image src={Travel} />
          </li>
          <li className="m-4 w-full h-[450px] overflow-hidden overflow-y-scroll border-4 border-[#1E1E1F] bg-[#88EB8C] drop-shadow-[9px_8px_0px_rgb(30,30,31)]">
            <Image src={Lemon} />
          </li>
          <li className="3xs:hidden le:block m-4 w-full h-[450px] overflow-hidden overflow-y-scroll border-4 border-[#1E1E1F] bg-[#88EB8C] drop-shadow-[9px_8px_0px_rgb(30,30,31)] p-2">
            <Image src={MJ} />
          </li>
        </ul>
      </div>
      <div className="flex justify-center m-1">
        <BsArrow90DegUp size={30} />
        <h1 className="text-center p-2 text-lg">scrollable</h1>
      </div>
      <div className="flex justify-center m-5">
        <div className="justify-content flex m-auto items-center p-4 bg-[#88EB8C] border-4 border-[#1E1E1F] drop-shadow-[5px_4px_0px_rgb(30,30,31)]">
          <h1 className="text-2xl p-2">want to see more?</h1>
          <button className="portfolio_button flex">
            <Link href="/Templates" className="text-white">
              click here
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
