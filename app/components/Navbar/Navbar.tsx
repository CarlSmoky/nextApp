'use client'
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLinks";
import Logo from "../../../public/images/Logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"
import { BsInstagram, BsYoutube } from "react-icons/bs";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const styles = {
    navLinks: "py-7 px-3 uppercase inline-block text-grey-200 hover:text-black-100 transition-all duration-300 ease-in-out text-sm"
  };

  return (
    <nav className="margin-global whitespace-nowrap">
      <div className="flex items-center font-medium justify-between">
        <div className="z-20 py-5 lg:w-auto w-full flex justify-between">
          <Image src={Logo} alt="logo" className="hidden sm:cursor-pointer h-9" />
          <div className="cursor-pointer text-3xl lg:hidden text-black-100" onClick={handleToggle}>
            {open ? <AiOutlineClose/> : <AiOutlineMenu/> }
          </div>
        </div>
        <ul className="lg:flex hidden uppercase items-center">
          <NavLinks onToggle={handleToggle}/>
          <li className={styles.navLinks}>
            <Link href="">
              <BsInstagram
                size={25}
              />
            </Link>
          </li>
          <li className={styles.navLinks}>
            <Link href="">
              <BsYoutube
                size={25}
              />
            </Link>
          </li>
        </ul>
        {/* Mobile nav */}
        <ul
          className={`
        lg:hidden bg-white-100 fixed w-full top-0 overflow-y-auto bottom-0 py-24
        duration-500 ${open ? "left-0 z-10" : "left-[-100%] z-10"}
        `}
        >
          <NavLinks onToggle={handleToggle} isOpen={open}/>
          <li className={styles.navLinks} onClick={handleToggle}>
            <Link href="">
              <BsInstagram
                size={25}
              />
            </Link>
          </li>
          <li className={styles.navLinks} onClick={handleToggle}>
            <Link href="">
              <BsYoutube
                size={25}
              />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
