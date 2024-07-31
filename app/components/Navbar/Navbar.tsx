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
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setOpen(!open);
    setHeading("");
  };

  const closeNav = () => {
    setOpen(false);
    setHeading("");
  };

  useEffect(() => {
    const currentModalRef = modalRef.current;
    if (open && currentModalRef) {
      const focusableElements = currentModalRef.querySelectorAll(
        "a[href], button, textarea, input, select"
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[
        focusableElements.length - 1
      ] as HTMLElement;

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
    <nav className="lg:mx-20 xl:mx-36 whitespace-nowrap text-grey-200 text-base xl:text-lg font-paragraph">
      <div className="flex justify-between ">
        <div className="m-4 md:mx-10 w-full flex justify-between">
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
        <div
          className={`lg:hidden bg-prime-100 fixed w-full top-0 overflow-y-auto bottom-0 duration-500 transform ${
            open ? "translate-x-0 z-30" : "-translate-x-full z-10"
          }`}
          ref={modalRef}
          role={open ? "dialog" : "navigation"}
          aria-label="Mobile navigation"
          aria-hidden={!open}
          aria-modal={open ? true : false}
        >
          <div className="m-4 md:mx-10 flex justify-between ">
            <div className="w-full flex justify-between">
              <Link
                href="/"
                onClick={closeNav}
                className="g-logo-to-home-link"
                tabIndex={open ? 0 : -1}
              >
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
                tabIndex={open ? 0 : -1}
              >
                {open ? <AiOutlineClose /> : <AiOutlineMenu />}
              </button>
            </div>
          </div>
          <ul className="m-4 md:mx-10">
            <NavLinks
              onToggle={handleClick}
              isOpen={open}
              heading={heading}
              setHeading={setHeading}
              isMobile={true}
            />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
