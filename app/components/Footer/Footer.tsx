import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import FooterNav from "./FooterNav";
import Logo from "../../../public/images/Logo.png";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <footer className="margin-global bottom-0 border-t border-grey-200">
      <div className="flex flex-col md:flex-row justify-between">
        <FooterNav />
        <div className="flex flex-col lg:flex-row">
          <ul className="m-auto">
            <li className="nav-sns">
              <Link href="https://www.instagram.com/noriko_toronto/" target="blank">
                <BsInstagram size={25} />
                <span className="sr-only">instagram</span>
              </Link>
            </li>
            <li className="nav-sns">
              <Link href="https://www.youtube.com/@norikoyamamoto7147" target="blank">
                <BsYoutube size={25} />
                <span className="sr-only">youtube</span>
              </Link>
            </li>
          </ul>
          <div className="flex flex-col my-3">
            <Link href="/" className="p-3 m-auto">
              <Image
                src={Logo}
                alt="logo"
                className="sm:cursor-pointer w-36 "
              />
            </Link>
            <h3 className="text-center font-paragraph text-xs text-grey-100 whitespace-nowrap">
              ©{currentYear} Momo gallery All rights reserved
            </h3>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
