'use client';
import React, { useState } from "react";
import '../globals.css'
import Link from "next/link";
import Image from "next/image";
import { BsInstagram, BsList, BsX, BsYoutube } from "react-icons/bs";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleMenu = () => setMenuOpen(!menuOpen)

  const styles = {
    navLinks:
      "cursor-pointer ml-10 uppercase border-b border-grey-500 hover:border-pink-800 xl:text-lg"
  };

  return (
    <header>
      <nav className="w-full h-24 shadow-xl">
        <div className="margin-global flex items-center justify-between h-full">
          <Image
            src="https://res.cloudinary.com/demo/image/upload/pg_2/kitten_fighting.gif"
            alt="cat"
            width={165}
            height={25}
            className="cursor-point"
          />
          <div className="text-black hidden xl:flex">
            <ul className="hidden xl:flex">
              <li className={styles.navLinks}>
                <Link href="/">HOME</Link>
              </li>
              <li className={styles.navLinks}>
                <Link href="/visual-art">VISUAL ART</Link>
              </li>
              <li className={styles.navLinks}>
                <Link href="/performance">PERFORMANCE</Link>
              </li>
              <li className={styles.navLinks}>
                <Link href="/nia-instruction">NIA INSTRUCTOR</Link>
              </li>
              <li className={styles.navLinks}>
                <Link href="/about">ABOUT</Link>
              </li>
              <li className={styles.navLinks}>
                <Link href="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>

          {/* mobile menu */}
          <div onClick={toggleMenu} className="xl:hidden cursor-pointer pl-24">
            <BsList className="h-8 w-8 text-black" />
          </div>
          <div
            className={
              menuOpen
                ? "fixed top-0 left-0 w-[75%] lg:hidden h-screen bg-[#ecf0f3] p-10 ease-in-out duration-500" 
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
                <li onClick={() => setMenuOpen(false)}className="py-4 hover:underline hover:decoration-[#F6B519]"><Link href="/">HOME</Link></li>
                <li onClick={() => setMenuOpen(false)}className="py-4 hover:underline hover:decoration-[#F6B519]"><Link href="/visual-art">VISUAL ART</Link></li>
                <li onClick={() => setMenuOpen(false)}className="py-4 hover:underline hover:decoration-[#F6B519]"><Link href="/performance">PERFORMANCE</Link></li>
                <li onClick={() => setMenuOpen(false)}className="py-4 hover:underline hover:decoration-[#F6B519]"><Link href="/nia-instruction">NIA INSTRUCTOR</Link></li>
                <li onClick={() => setMenuOpen(false)}className="py-4 hover:underline hover:decoration-[#F6B519]"><Link href="/about">ABOUT</Link></li>
                <li onClick={() => setMenuOpen(false)}className="py-4 hover:underline hover:decoration-[#F6B519]"><Link href="/contact">CONTACT</Link></li>
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
