import React from "react";
import Link from "next/link";
import { links } from "../Navbar/links";

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

const FooterNav = () => {
  return (
      <ul className="flex flex-col md:flex-row px-4 md:px-0 uppercase font-paragraph text-sm whitespace-nowrap">
        {links.map((link: Link, i) => (
          <li key={i} className="">
            <Link href={link.link}>
              <h3 className="text-grey-200 py-3 px-0 md:px-1 lg:px-2 hover:text-black-100 transition-all duration-300 ease-in-out">{link.name}</h3>
            </Link>
            {link.submenu && (
              <div className="flex flex-col text-grey-200/80 text-xs">
                <ul>
                  {link.sublinks.map((slink, i) => (
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
