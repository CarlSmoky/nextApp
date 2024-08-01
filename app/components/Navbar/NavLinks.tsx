"use client";
import React, { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LinkInfo, Sublink } from "../../types/Interfaces";
import { links } from "./links";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import { removeExcessivePathSegments } from "../../utils/textFormat";

type NavLinksProps = {
  onToggle: () => void;
  isOpen: boolean;
  heading: string;
  isMobile?: boolean;
  setHeading: (heading: string | "") => void;
};

const NavLinks: React.FC<NavLinksProps> = ({
  onToggle,
  isOpen,
  heading,
  setHeading,
  isMobile = false
}) => {
  const pathname = usePathname();

  return (
    <>
      {links.map((link: LinkInfo, i) => (
        <Fragment key={i}>
          <li className="text-left md:cursor-pointer group">
            <div
              className={`py-7 px-3 lg:px-2 flex align-baseline hover:text-black-100 ${
                removeExcessivePathSegments(pathname) === link.link
                  ? "underline underline-offset-4"
                  : ""
              }`}
            >
              <Link
                onClick={onToggle}
                href={link.link}
                prefetch={false}
                className="g-nav"
                tabIndex={isOpen || !isMobile ? 0 : -1}
              >
                {link.name}
              </Link>
              {link.submenu && (
                <button
                  className="text-2xl px-2 lg:mx-0 lg:px-1 dropdown-icon"
                  aria-label={heading === link.name ? "collapse submenu" : "expand submenu"}
                  aria-expanded={heading === link.name}
                  aria-controls={`${link.name}-submenu`}
                  onClick={() => heading !== link.name ? setHeading(link.name): setHeading("")}
                  tabIndex={isOpen || !isMobile ? 0 : -1}
                >
                  {heading === link.name ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
                </button>
              )}
            </div>
            <ul
              className={`lg:absolute lg:top-20 lg:bg-prime-100/95 z-20
                ${heading === link.name ? "" : "hidden"}
              `}
            >
              {link.sublinks.map((slinks: Sublink, i) => (
                <li
                  key={i}
                  className="mx-4 p-3 text-sm hover:text-black-100 transition-all duration-300 ease-in-out"
                >
                  <Link
                    onClick={onToggle}
                    href={slinks.link}
                    prefetch={false}
                    className="g-nav"
                    tabIndex={isOpen || heading === link.name ? 0 : -1}
                  >
                    {slinks.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        </Fragment>
      ))}
    </>
  );
};

export default NavLinks;
