import React from "react";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { RiMessengerLine } from "react-icons/ri";
import { BsYoutube } from "react-icons/bs";
import Image from "next/image";
import Logo from "../assets/Logo.png";

const Footers = () => {
  return (
    <footer>
      <a href="/" className="footer__logo w-[8rem]">
        <Image src={Logo} />
      </a>

      <ul className="permalinks">
        <li>
          <a href="/"> Home </a>
        </li>
        <li>
          <a href="#services">services</a>
        </li>
        <li>
          <a href="#info">info </a>
        </li>
        <li>
          <a href="#info">our work </a>
        </li>
        <li>
          <a href="#contact"> Contact </a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com">
          <FaFacebookF />
        </a>
        <a href="https://www.linkedin.com/">
          <AiOutlineLinkedin />
        </a>
        <a href="/">
          <RiMessengerLine />
        </a>
        <a href="https://www.youtube.com/">
          <BsYoutube />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 2022 mired . All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footers;
