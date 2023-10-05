"use client";
import React, { useState } from "react";
import "../globals.css";
import Link from "next/link";
import Image from "next/image";
import { BsInstagram, BsList, BsX, BsYoutube } from "react-icons/bs";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const styles = {
    navLinks: "cursor-pointer ml-6 uppercase lg:text-xs xl:text-sm",
    hover: "hover:border-b hover:border-grey-200 ease-in-out duration-200",
  };

  return (
    <header>
      <nav className="w-full h-24 shadow-xl whitespace-nowrap">
        <div className="margin-global flex items-center justify-between h-full">
          <Image
            src="https://res.cloudinary.com/demo/image/upload/pg_2/kitten_fighting.gif"
            alt="cat"
            width={165}
            height={25}
            className="cursor-point"
          />
          <div className="text-black hidden lg:flex lg:items-center">
            <ul className="hidden lg:flex lg:items-center">
              <li className={styles.navLinks}>
                <Link className={styles.hover} href="/">
                  HOME
                </Link>
              </li>
              <li className={styles.navLinks}>
                <Link className={styles.hover} href="/visual-art">
                  VISUAL ART
                </Link>
              </li>
              <li className={styles.navLinks}>
                <Link className={styles.hover} href="/performance">
                  PERFORMANCE
                </Link>
              </li>
              <li className={styles.navLinks}>
                <Link className={styles.hover} href="/nia-instruction">
                  NIA INSTRUCTOR
                </Link>
              </li>
              <li className={styles.navLinks}>
                <Link className={styles.hover} href="/about">
                  ABOUT
                </Link>
              </li>
              <li className={styles.navLinks}>
                <Link className={styles.hover} href="/contact">
                  CONTACT
                </Link>
              </li>
              <li className={styles.navLinks}>
                <Link href="/">
                  <BsInstagram
                    size={25}
                    className="cursor-pointer hover:text-grey-100 ease-in-out duration-300"
                  />
                </Link>
              </li>
              <li className={styles.navLinks}>
                <Link href="/">
                  <BsYoutube
                    size={25}
                    className="cursor-pointer hover:text-grey-100 ease-in-out duration-300"
                  />
                </Link>
              </li>
            </ul>
          </div>

          {/* mobile menu */}
          <div
            onClick={toggleMenu}
            className="lg:hidden cursor-pointer pl-24 z-100"
          >
            <BsList className="h-8 w-8 text-black" />
          </div>
          <div
            className={
              menuOpen
                ? "fixed top-0 left-0 w-[75%] lg:hidden h-screen bg-[#ecf0f3] p-10 ease-in-out duration-500 z-20"
                : "fixed left-[-100%] top-0 p-10 ease-in-out duration-500"
            }
          >
            <div className="flex w-full items-center justify-end">
              <div onClick={toggleMenu} className="cousor-pointer">
                <BsX className="h-8 w-8 text-black" />
              </div>
            </div>
            {/* mobile menu links */}
            <div className="flex-col py-4">
              <ul>
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 hover:underline hover:decoration-[#F6B519]"
                >
                  <Link href="/">HOME</Link>
                </li>
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 hover:underline hover:decoration-[#F6B519]"
                >
                  <Link href="/visual-art">VISUAL ART</Link>
                </li>
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 hover:underline hover:decoration-[#F6B519]"
                >
                  <Link href="/performance">PERFORMANCE</Link>
                </li>
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 hover:underline hover:decoration-[#F6B519]"
                >
                  <Link href="/nia-instruction">NIA INSTRUCTOR</Link>
                </li>
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 hover:underline hover:decoration-[#F6B519]"
                >
                  <Link href="/about">ABOUT</Link>
                </li>
                <li
                  onClick={() => setMenuOpen(false)}
                  className="py-4 hover:underline hover:decoration-[#F6B519]"
                >
                  <Link href="/contact">CONTACT</Link>
                </li>
              </ul>
            </div>
            {/* social media links */}
            <div className="flex flex-row justify-around pt-10 items-center">
              <Link href="/">
                <BsInstagram
                  size={30}
                  className="cursor-pointer hover:text-[#F6B519] ease-in-out duration-300"
                />
              </Link>
              <Link href="/">
                <BsYoutube
                  size={30}
                  className="cursor-pointer hover:text-[#F6B519] ease-in-out duration-300"
                />
              </Link>
            </div>
            <Image
              src="https://res.cloudinary.com/demo/image/upload/pg_2/kitten_fighting.gif"
              alt="cat"
              width={160}
              height={25}
              className="cursor-point pt-10 mx-auto"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
