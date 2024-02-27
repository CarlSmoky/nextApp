"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLinks";
import SnsLinks from "../SnsLinks";
import Logo from "../../../public/images/Logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  const closeNav = () => {
    setOpen(false);
  };

  return (
    <nav className="margin-global whitespace-nowrap text-grey-200 text-base xl:text-lg font-paragraph">
      <div className="flex justify-between">
        <div className="z-50 py-3 w-full flex justify-between">
          <Link
            href="/"
            onClick={() => {
              closeNav();
            }}
          >
            <Image
              src={Logo}
              alt="Momo gallery logo"
              className="sm:cursor-pointer w-36 md:w-48 lg:w-56"
              sizes="33vw"
              priority
            />
          </Link>
          <div
            className="cursor-pointer text-3xl lg:hidden text-black-100 my-auto"
            onClick={handleToggle}
          >
            {open ? <AiOutlineClose /> : <AiOutlineMenu />}
          </div>
        </div>
        <ul className="hidden lg:flex items-center">
          <NavLinks onToggle={handleToggle} />
          <SnsLinks/>
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
            <SnsLinks clickHandler={handleToggle}/>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
