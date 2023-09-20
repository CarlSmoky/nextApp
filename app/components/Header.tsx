'use client';
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsInstagram, BsList, BsX, BsYoutube } from "react-icons/bs";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)

  const styles = {
    navLinks:
      "cursor-pointer ml-10 uppercase border-b border-white hover:border=[#F6B519] text-xl ",
  };

  return (
    <header>
      <nav className="w-full h-24 shadow-xl bg-black">
        <div className="flex items-center justify-between h-full px-4 w-full">
          <Image
            src="https://res.cloudinary.com/demo/image/upload/pg_2/kitten_fighting.gif"
            alt="cat"
            width={165}
            height={25}
            className="cursor-point"
          />
          <div className="text-white hidden sm:flex">
            <ul className="hidden sm:flex">
              <li className={styles.navLinks}>
                <Link href="/">HOME</Link>
              </li>
              <li className={styles.navLinks}>
                <Link href="/">VISUAL ART</Link>
              </li>
              <li className={styles.navLinks}>
                <Link href="/">PERFORMANCE</Link>
              </li>
              <li className={styles.navLinks}>
                <Link href="/">NIA INSTRUCTOR</Link>
              </li>
              <li className={styles.navLinks}>
                <Link href="/">ABOUT</Link>
              </li>
              <li className={styles.navLinks}>
                <Link href="/">CONTACT</Link>
              </li>
            </ul>
          </div>

          {/* mobile menu */}
          <div onClick={toggleMenu} className="sm:hidden cursor-pointer pl-24">
            <BsList className="h-8 w-8 text-white" />
          </div>
          <div
            className={
              menuOpen
                ? "fixed top-0 left-0 w-[75%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in-out duration-500" 
                : "fixed left-[-100%] top-0 p-10 ease-in-out duration-500"
            }
          >
            <div className="flex w-full items-center justify-end">
              <div onClick={toggleMenu} className="cousor-pointer">
                <BsX className="h-8 w-8 text-[#F6B519]" />
              </div>
            </div>
            {/* mobile menu links */}
            <div className="flex-col py-4">
              <ul>
                <li onClick={() => setMenuOpen(false)}className="py-4 hover:underline hover:decoration-[#F6B519]"><Link href="/">HOME</Link></li>
                <li onClick={() => setMenuOpen(false)}className="py-4 hover:underline hover:decoration-[#F6B519]"><Link href="/">VISUAL ART</Link></li>
                <li onClick={() => setMenuOpen(false)}className="py-4 hover:underline hover:decoration-[#F6B519]"><Link href="/">PERFORMANCE</Link></li>
                <li onClick={() => setMenuOpen(false)}className="py-4 hover:underline hover:decoration-[#F6B519]"><Link href="/">NIA INSTRUCTOR</Link></li>
                <li onClick={() => setMenuOpen(false)}className="py-4 hover:underline hover:decoration-[#F6B519]"><Link href="/">ABOUT</Link></li>
                <li onClick={() => setMenuOpen(false)}className="py-4 hover:underline hover:decoration-[#F6B519]"><Link href="/">CONTACT</Link></li>
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
