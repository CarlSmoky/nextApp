import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import FooterNav from "./FooterNav";
import Logo from "../../../public/images/Logo.png";

const Footer = () => {
  return (
    <footer className="margin-global bottom-0 border-t border-grey-200">
      <div className="flex flex-col md:flex-row justify-between">
        <FooterNav />
        <div className="flex flex-col lg:flex-row">
          <ul className="m-auto">
            <li className="nav-sns px-7">
              <Link href="https://www.instagram.com/noriko_toronto/">
                <BsInstagram size={25} />
                <span className="sr-only">instagram</span>
              </Link>
            </li>
            <li className="nav-sns px-7">
              <Link href="https://www.youtube.com/@norikoyamamoto7147">
                <BsYoutube size={25} />
                <span className="sr-only">youtube</span>
              </Link>
            </li>
          </ul>
          <Link href="/" className="p-6 m-auto">
            <Image
              src={Logo}
              alt="logo"
              className="sm:cursor-pointer w-36 "
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
