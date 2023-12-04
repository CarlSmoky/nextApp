"use client";
import React, { useState, useContext } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLinks";
import Logo from "../../../public/images/Logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { DisplayNavContext } from "../../provider/DisplayNavProvider";
import { NavState } from "../../types/Interfaces";
import { BsInstagram, BsYoutube } from "react-icons/bs";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const navContext = useContext(DisplayNavContext)

  const handleToggle = () => {
    setOpen(!open);
  };

  const clickHandler = () => {
    setOpen(false)
    navContext?.setCurrentNav(NavState.home)
  }

  return (
    <nav className="margin-global whitespace-nowrap">
      <div className="flex items-center font-medium justify-between">
        <div className="z-50 py-3 lg:w-auto w-full flex justify-between">
          <Link href="/" onClick={clickHandler}>
            <Image
              src={Logo}
              alt="logo"
              className="sm:cursor-pointer w-28 lg:h-20 lg:w-full"
            />
          </Link>
          <div
            className="cursor-pointer text-3xl lg:hidden text-black-100"
            onClick={handleToggle}
          >
            {open ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>
        </div>
        <ul className="lg:flex hidden uppercase items-center">
          <NavLinks onToggle={handleToggle} />
          <li className="nav-sns">
            <Link href="https://www.instagram.com/noriko_toronto/" target="_blank">
              <BsInstagram size={25} />
              <span className="sr-only">instagram</span>
            </Link>
          </li>
          <li className="nav-sns">
            <Link href="https://www.youtube.com/@norikoyamamoto7147" target="_blank">
              <BsYoutube size={25} />
              <span className="sr-only">youtube</span>
            </Link>
          </li>
        </ul>
        {/* Mobile nav */}
        <ul
          className={`
        lg:hidden bg-prime-100 fixed w-full top-0 overflow-y-auto bottom-0 py-24
        duration-500 ${open ? "left-0 z-30" : "left-[-100%] z-10"}
        `}
        >
          <NavLinks onToggle={handleToggle} />
          <div className="flex justify-center">
            <li className="nav-sns" onClick={handleToggle}>
              <Link href="https://www.instagram.com/noriko_toronto/" target="_blank">
                <BsInstagram size={25} />
                <span className="sr-only">instagram</span>
              </Link>
            </li>
            <li className="nav-sns" onClick={handleToggle}>
              <Link href="https://www.youtube.com/@norikoyamamoto7147" target="_blank">
                <BsYoutube size={25} />
                <span className="sr-only">youtube</span>
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
