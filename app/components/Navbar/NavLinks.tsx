"use client";
import React, { useState, Dispatch, SetStateAction } from "react";
import Link from "next/link";
import { links } from "./Mylinks";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";

interface ChildComponentProps {
  onToggle: () => void;
}

const NavLinks: React.FC<ChildComponentProps> = ({ onToggle }) => {
  const [heading, setHeading] = useState<string>("");

  interface Link {
    name: string;
    link: string;
    submenu: boolean;
    sublinks: Sublink[];
  }

  interface Sublink {
    name: string;
    link: string;
  }

  const clickHandler = () => {
    onToggle();
    setHeading("");
  }
  
  return (
    <>
      {links.map((link: Link, i) => (
        <div key={i}>
          <div className="text-left md:cursor-pointer group">
            <h1
              className="py-7 px-3 lg:pr-0 pr-5 flex justify-between align-baseline text-grey-200 text-sm uppercase   hover:text-black-100 transition-all duration-300 ease-in-out"
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
              {link.submenu && (<span className="hidden text-lg lg:text-sm lg:mt-1 lg:ml-2 lg:block group-hover:rotate-180 group-hover:-mt-2 group-hover:text-black-100">
              <RiArrowDownSLine />
              </span>
              )}
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:lg:block hover:lg:block z-10">
                  <div className="bg-prime-100 rounded-sm grid grid-cols-3 px-5 ">
                    {link.sublinks.map((slink, i) => (
                      <div key={i}>
                        <li className="text-sm text-grey-200 my-2.5">
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
            {link.sublinks.map((slinks, i) => (
              <div key={i}>
                <div>
                  <li onClick={clickHandler} className="py-3 pl-14 text-grey-200 text-sm  uppercase hover:text-black-100 transition-all duration-300 ease-in-out">
                    <Link href={slinks.link}>{slinks.name}</Link>
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
