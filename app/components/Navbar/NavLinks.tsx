"use client";
import React, { useState } from "react";
import Link from "next/link";
import { links } from "./Mylinks";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";

const NavLinks = () => {
  const [heading, setHeading] = useState("");

  interface Link {
    name: string;
    submenu: boolean;
    sublinks: Sublink[];
  }

  interface Sublink {
    name: string;
    link: string;
  }
  return (
    <>
      {links.map((link: Link, i) => (
        <div key={i}>
          <div className="px-3 text-left md:cursor-pointer group">
            <h1
              className="py-7 flex text-black justify-between items-center md:pr-0 pr-5 group"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
              }}
            >
              {link.name}
              <span className="text-xl md:hidden inline">
                {heading === link.name ? (
                  <RiArrowUpSLine />
                ) : (
                  <RiArrowDownSLine />
                )}
              </span>
              <span className="text-xl md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <RiArrowDownSLine />
              </span>
            </h1>
            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block hover:md:block z-10">
                  <div className="bg-white-100 p-5 grid grid-cols-3">
                    {link.sublinks.map((slink, i) => (
                      <div key={i}>
                        <li key={i} className="text-sm text-gray-600 my-2.5">
                          <Link
                            href={slink.link}
                            className="hover:text-primary"
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
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {/* sublinks */}
            {link.sublinks.map((slinks, i) => (
              <div key={i}>
                <div>
                  <li key={i} className="text-black  py-3 pl-14">
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
