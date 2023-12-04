"use client"
import React, { useContext } from "react";
import Link from "next/link";
import { DisplayNavContext} from "../../provider/DisplayNavProvider";
import { NavState, LinkInfo, Sublink } from "../../types/Interfaces";
import { links } from "../Navbar/links";

const FooterNav = () => {
  const navContext = useContext(DisplayNavContext)

  const clickHandler = (link: LinkInfo) => {
    // redirect contact highlighting to home
    const newHighlight = link.navState === NavState.contact ? NavState.home : link.navState
    navContext?.setCurrentNav(newHighlight)
  }
  return (
      <ul className="flex flex-col md:flex-row px-4 md:px-0 uppercase font-paragraph text-sm whitespace-nowrap">
        {links.map((link: LinkInfo, i) => (
          <li key={i} className="">
            <Link onClick={() => clickHandler(link)} href={link.link}>
              <h3 className={`text-grey-200 py-3 px-0 md:px-1 lg:px-2 hover:text-black-100 transition-all duration-300 ease-in-out ${navContext?.currentNav ===  link.navState ? 'underline underline-offset-4' : ""}`}>{link.name}</h3>
            </Link>
            {link.submenu && (
              <div className="flex flex-col text-grey-200/80 text-xs">
                <ul>
                  {link.sublinks.map((slink: Sublink, i) => (
                    <div key={i}>
                      <li className="py-3 px-0 md:px-1 lg:px-2 hover:text-black-100 transition-all duration-300 ease-in-out">
                        <Link href={slink.link}>{slink.name}</Link>
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
  );
};

export default FooterNav;
