"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLinks";
import SnsLinks from "../SnsLinks";
import Logo from "../../../public/images/Logo.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [heading, setHeading] = useState<string>("");

  const handleClick = () => {
    setOpen(!open);
    setHeading("");
  };

  const closeNav = () => {
    setOpen(false);
    setHeading("");
  };

  return (
    <nav className="margin-global whitespace-nowrap text-grey-200 text-base xl:text-lg font-paragraph">
      <div className="flex justify-between">
        <div className="z-50 py-3 w-full flex justify-between">
          <Link href="/" onClick={closeNav} className="g-logo-to-home-link">
            <Image
              src={Logo}
              alt="Momo gallery logo"
              className="sm:cursor-pointer w-36 md:w-48 lg:w-56"
              sizes="33vw"
            />
          </Link>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            className="cursor-pointer text-3xl lg:hidden text-black-100 my-auto"
            onClick={handleClick}
          >
            {open ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
        <ul className="hidden lg:flex items-center">
          <NavLinks
            onToggle={handleClick}
            isOpen={open}
            heading={heading}
            setHeading={setHeading}
          />
          <SnsLinks />
        </ul>
        {/* Mobile nav */}
        <ul
          className={`lg:hidden bg-prime-100 fixed w-full top-0 overflow-y-auto bottom-0 py-24 duration-500 ${open ? "left-0 z-30 block" : "left-[-100%] z-10 hidden"}`}
          role="dialog"
          aria-label="Mobile navigation"
          aria-hidden={!open}
        >
          <NavLinks
            onToggle={handleClick}
            isOpen={open}
            heading={heading}
            setHeading={setHeading}
          />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
