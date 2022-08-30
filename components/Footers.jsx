import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import Image from "next/image";
import Logo from "../assets/Logo.png";
import Link from "next/link";

const Footers = () => {
  return (
    <footer>
      <Link href="/" className="footer__logo w-[8rem]">
        <Image src={Logo} />
      </Link>

      <ul className="permalinks font-bold p-4">
        <li>
          <Link href="/"> home </Link>
        </li>
        <li>
          <Link href="#services">services</Link>
        </li>
        <li>
          <Link href="#info">info </Link>
        </li>
        <li>
          <Link href="#info">our work </Link>
        </li>
        <li>
          <Link href="#contact"> Contact </Link>
        </li>
      </ul>
      <div className="footer__socials">
        <Link href="https://www.facebook.com/MiredWebServices">
          <FaFacebookF />
        </Link>
        <Link href="https://www.instagram.com/miredwebservices/">
          <AiOutlineInstagram />
        </Link>
        <Link href="https://www.tiktok.com/@miredwebservices">
          <FaTiktok />
        </Link>
        <Link href="https://www.youtube.com/channel/UCk2gRUjNhpykmPLkii2lIUA">
          <BsYoutube />
        </Link>
      </div>

      <div className="footer__copyright">
        <small>&copy; 2022 mired . All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footers;
