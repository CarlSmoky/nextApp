"use client";
import React, { useState, Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LinkInfo, Sublink } from "../../types/Interfaces";
import { links } from "./links";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import { removeExcessivePathSegments } from "../../utils/textFormat";

const NavLinks: React.FC<{ onToggle: () => void }> = ({ onToggle }) => {
  const [heading, setHeading] = useState<string>("");
  const pathname = usePathname();

  const clickHandler = () => {
    onToggle();
    setHeading("");
  };

  return (
    <>
      {links.map((link: LinkInfo, i) => (
        <Fragment key={i}>
          <li className="text-left md:cursor-pointer group">
            <div
              className={`py-7 px-3 lg:px-2 flex align-baseline hover:text-black-100 ${
                removeExcessivePathSegments(pathname) === link.link ? "underline underline-offset-4" : ""}`}
            >
              <Link onClick={clickHandler} href={link.link} prefetch={false} className="g-nav">
                {link.name}
              </Link>
              {link.submenu && (
                <span
                  className="text-2xl mx-4 px-2 lg:hidden inline"
                  onClick={() => {
                    heading !== link.name
                      ? setHeading(link.name)
                      : setHeading("");
                  }}
                >
                  {heading === link.name ? (
                    <RiArrowUpSLine />
                  ) : (
                    <RiArrowDownSLine />
                  )}
                </span>
              )}
              {link.submenu && (
                <div className="hidden text-lg lg:flex lg:justify-center lg:my-auto lg:px-1 group-hover:text-black-100 group-hover:rotate-180 transition-all duration-600 ease-in-out">
                  <RiArrowDownSLine />
                </div>
              )}
            </div>
            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:lg:block hover:lg:block z-10">
                  <ul className="bg-prime-100 rounded-sm grid grid-cols-3 px-5 ">
                    {link.sublinks.map((slink: Sublink, i) => (
                      <Link
                        key={i}
                        href={slink.link}
                        prefetch={false}
                        className="g-nav"
                      >
                        <li className="text-sm my-2.5 hover:text-black-100 transition-all duration-300 ease-in-out">
                          {slink.name}
                        </li>
                      </Link>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </li>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "lg:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks: Sublink, i) => (
              <Link key={i} onClick={clickHandler} href={slinks.link} prefetch={false} className="g-nav">
                <li className="py-3 pl-14 text-sm hover:text-black-100 transition-all duration-300 ease-in-out">
                  {slinks.name}
                </li>
              </Link>
            ))}
          </div>
        </Fragment>
      ))}
    </>
  );
};

export default NavLinks;
