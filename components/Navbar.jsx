import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../assets/Logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("#05036F");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#FFF9D8");
        setTextColor("#05036F");
      } else {
        setColor("transparent");
        setTextColor("#05036F");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 border-[#F5F5F5] xl:border-b-black xl:border-2 ">
        <Link href="/" className="">
          <Image src={Logo} width={153} height={36} />
        </Link>
        <ul
          style={{ Color: `${textColor}` }}
          className="hidden sm:flex sm:mr-[-6rem] sr:mr-[-9rem] md:mr-[-4rem] mr:mr-[-10rem] le:mr-[-13rem] lg:mr-[-19rem] lr:mr-[-25rem] xl:mr-[-30rem] lgg:mr-[-17rem] xlr:mr-[-30rem]"
        >
          <li className="p-4 font-bold sm:text-[0.95rem] md:text-[1.4rem]">
            <Link href="/">home</Link>
          </li>
          <li className="p-4 font-bold sm:text-[0.95rem] md:text-[1.4rem]">
            <Link href="#services">
              <a>services</a>
            </Link>
          </li>
          <li className="p-4 font-bold sm:text-[0.95rem] md:text-[1.4rem]">
            <Link href="#info">
              <a>info</a>
            </Link>
          </li>
          <li className="p-4 font-bold sm:text-[0.95rem] md:text-[1.4rem] w-[9rem]">
            <Link href="#Portfolio">
              <a>our work</a>
            </Link>
          </li>
        </ul>
        <button className="button-50 hidden sm:flex ">
          <Link href="#contact">contact us</Link>
        </button>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={38} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={38} style={{ color: `${textColor}` }} />
          )}
        </div>
      </div>
      <div className="border-b-black border-2 mx-3 xl:hidden" />
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
            className="p-4 text-4xl hover:text-orange-500 font-bold"
          >
            <Link href="/">home</Link>
          </li>
          <li
            onClick={handleNav}
            className="p-4 text-4xl hover:text-orange-500 font-bold"
          >
            <Link href="#services">services</Link>
          </li>
          <li
            onClick={handleNav}
            className="p-4 text-4xl hover:text-orange-500 font-bold"
          >
            <Link href="#info">info</Link>
          </li>
          <li
            onClick={handleNav}
            className="pt-4 pb-8 text-4xl hover:text-orange-500 font-bold"
          >
            <Link href="#Portfolio">our work</Link>
          </li>
          <button onClick={handleNav} className="button-50 w-[140px]">
            <Link href="#contact">contact us</Link>
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
