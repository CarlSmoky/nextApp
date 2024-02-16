"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LinkInfo, Sublink } from "../../types/Interfaces";
import { links } from "./links";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import { removeExcessivePathSegments } from "../../utils/textFormat";


const NavLinks: React.FC<{ onToggle: () => void }> = ({ onToggle })  => {
  const [heading, setHeading] = useState<string>("");
  const pathname = usePathname();

  const clickHandler = () => {
    onToggle();
    setHeading("");
  }
  
  return (
    <>
      {links.map((link: LinkInfo, i) => (
        <div key={i}>
          <div className="text-left md:cursor-pointer group">
            <h1
              className={`py-7 px-3 lg:px-2 flex justify-between align-baseline text-grey-200 text-base xl:text-lg font-paragraph hover:text-black-100 ${removeExcessivePathSegments(pathname) ===  link.link ? 'underline underline-offset-4' : ""}`}
            >
              <Link onClick={clickHandler} href={link.link}>{link.name}</Link>
              {link.submenu && (<span className="text-lg lg:text-sm lg:hidden inline" onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
              }}>
                {heading === link.name ? (
                  <RiArrowUpSLine />
                ) : (
                  <RiArrowDownSLine />
                )}
              </span>)}
              {link.submenu && (
              <div className="hidden text-lg lg:flex lg:justify-center lg:my-auto group-hover:text-black-100 group-hover:rotate-180 transition-all duration-600 ease-in-out">
                <RiArrowDownSLine />
              </div>
              )}
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:lg:block hover:lg:block z-10">
                  <div className="bg-prime-100 rounded-sm grid grid-cols-3 px-5 ">
                    {link.sublinks.map((slink: Sublink, i) => (
                      <div key={i}>
                        <li className="text-sm font-paragraph text-grey-200 my-2.5">
                          <Link
                            href={slink.link}
                            className="hover:text-black-100 transition-all duration-300 ease-in-out"
                          >
                            {slink.name}
                          </Link>
                        </li>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile menus */}
          <div
            className={`
            ${heading === link.name ? "lg:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks: Sublink, i) => (
              <div key={i}>
                <div>
                  <li className="py-3 pl-14 text-grey-200 text-sm font-paragraph hover:text-black-100 transition-all duration-300 ease-in-out">
                    <Link onClick={clickHandler} href={slinks.link}>{slinks.name}</Link>
                  </li>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
