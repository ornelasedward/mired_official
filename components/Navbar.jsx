import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/Logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("#FFB602");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#FFF9D8");
        setTextColor("#FFB602");
      } else {
        setColor("transparent");
        setTextColor("#FFB602");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="">
        <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 border-b-[0.15rem] border-[#010001]">
          <Link href="/" className="">
            <Image src={Logo} width={153} height={36} />
          </Link>
          <ul style={{ Color: `${textColor}` }} className="hidden sm:flex">
            <li className="p-4 font-bold text-[1.4rem]">
              <Link href="/">home</Link>
            </li>
            <li className="p-4 font-bold text-[1.4rem]">
              <Link href="#services">services</Link>
            </li>
            <li className="p-4 font-bold text-[1.4rem]">
              <Link href="#info">info</Link>
            </li>
            <li className="p-4 font-bold text-[1.4rem] w-[9rem]">
              <Link href="#portfolio">our work</Link>
            </li>
          </ul>
          <button className="button-50">
            <Link href="#contact">contact us</Link>
          </button>
        </div>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[#FFF9D8] text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-[#FEB600] text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-2 text-4xl hover:text-orange-500 font-bold"
            >
              <Link href="/">home</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-2 text-4xl hover:text-orange-500 font-bold"
            >
              <Link href="#services">services</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-2 text-4xl hover:text-orange-500 font-bold"
            >
              <Link href="#info">info</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-2 text-4xl hover:text-orange-500 font-bold"
            >
              <Link href="#portfolio">our work</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-2 text-4xl hover:text-orange-500 font-bold"
            >
              <Link href="#contact">contact us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
