'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import Logo from "../../Logo.png";
// import Button from "../Button";
import NavLinks from "./NavLinks";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { BsInstagram, BsList, BsX, BsYoutube } from "react-icons/bs";




const Navbar = () => {
  const [open, setOpen] = useState(false);

  const styles = {
    navLinks: "cursor-pointer ml-6 uppercase lg:text-sm xl:text-base",
    group: "group",
    hoverAnimation:
      "block max-w-full opacity-0 group-hover:opacity-100  transition-all duration-300 ease-in-out h-px bg-grey-100",
    mobileMenu:
      "py-4 hover:underline hover:decoration-grey-200 underline-offset-4",
  };

  return (
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          {/* <Image src={Logo} alt="logo" className="md:cursor-pointer h-9" /> */}
          <div className="cursor-pointer text-3xl md:hidden text-black" onClick={() => setOpen(!open)}>
            {open ? <AiOutlineClose/> : <AiOutlineMenu/> }
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link href="/" className="py-7 px-3 inline-block text-black">
              Home
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link href="/about" className="py-7 px-3 inline-block text-black">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="py-7 px-3 inline-block text-black">
              Contact
            </Link>
          </li>
          <li className={styles.navLinks}>
            <Link href="">
              <BsInstagram
                size={25}
                className="cursor-pointer hover:text-grey-100 ease-in-out duration-300"
              />
            </Link>
          </li>
          <li className={styles.navLinks}>
            <Link href="">
              <BsYoutube
                size={25}
                className="cursor-pointer hover:text-grey-100 ease-in-out duration-300"
              />
            </Link>
          </li>
        </ul>
        <div className="md:block hidden">
          {/* <Button /> */}
        </div>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link href="/" className="py-7 px-3 inline-block">
              Home
            </Link>
          </li>
          <NavLinks />
          <div className="py-5">
            {/* <Button /> */}
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
