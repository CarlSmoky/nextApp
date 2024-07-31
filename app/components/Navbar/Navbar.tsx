"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import NavLinks from "./NavLinks";
import SnsLinks from "../SnsLinks";
import Logo from "../../../public/images/Logo.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [heading, setHeading] = useState<string>("");
  const modalRef = useRef<HTMLUListElement>(null);

  const handleClick = () => {
    setOpen(!open);
    setHeading("");
  };

  const closeNav = () => {
    setOpen(false);
    setHeading("");
  };

  useEffect(() => {
    if (open && modalRef.current) {
      const currentModalRef = modalRef.current;
      const focusableElements = currentModalRef.querySelectorAll(
        'a[href], button, textarea, input, select'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      const trapFocus = (event: KeyboardEvent) => {
        if (event.key === "Tab") {
          if (event.shiftKey) {
            // Shift + Tab
            if (document.activeElement === firstElement) {
              event.preventDefault();
              lastElement.focus();
            }
          } else {
            // Tab
            if (document.activeElement === lastElement) {
              event.preventDefault();
              firstElement.focus();
            }
          }
        } else if (event.key === "Escape") {
          closeNav();
        }
      };

      currentModalRef.addEventListener("keydown", trapFocus);

      // Set focus to the first element
      if (firstElement) {
        firstElement.focus();
      }

      return () => {
        currentModalRef.removeEventListener("keydown", trapFocus);
      };
    }
  }, [open]);

  return (
    <nav
    className="margin-global whitespace-nowrap text-grey-200 text-base xl:text-lg font-paragraph"
    >
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
          className={`lg:hidden bg-prime-100 fixed w-full top-0 overflow-y-auto bottom-0 py-24 duration-500 transform ${
            open ? "left-0 z-30" : "left-[-100%] z-10"
          }`}
          ref={modalRef}
          role={open ? "dialog" : "navigation"}
          aria-label="Mobile navigation"
          aria-hidden={!open}
          aria-modal={open ? true : false}
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
