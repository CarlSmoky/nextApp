"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LinkInfo, Sublink } from "../../types/Interfaces";
import { links } from "../Navbar/links";
import { removeExcessivePathSegments } from "../../utils/textFormat";

const FooterNav = () => {
  const pathname = usePathname();
  return (
    <ul className="w-full xl:w-2/3 flex flex-col lg:flex-row px-4 md:px-0 whitespace-nowrap">
      {links.map((link: LinkInfo, i) => (
        <li key={i} className="lg:w-1/6">
          <Link
            href={link.link}
            prefetch={false}
            className={`g-footer-nav-link block my-2 py-2 px-1 text-sm md:text-base lg:text-sm xl:text-base hover:text-black-100 transition-all duration-300 ease-in-out ${
              removeExcessivePathSegments(pathname) === link.link
                ? "underline underline-offset-4"
                : ""
            }`}
          >
            {link.name}
          </Link>
          {link.submenu && (
            <ul className="flex flex-col text-grey-200/85 text-xs">
              {link.sublinks.map((slink: Sublink, i) => (
                <li key={i} className="ml-3 p-2 hover:text-black-100 transition-all duration-300 ease-in-out">
                  <Link href={slink.link} prefetch={false} className="g-footer-nav-link">
                    {slink.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default FooterNav;
