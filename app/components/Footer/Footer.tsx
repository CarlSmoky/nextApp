import Link from "next/link";
import Image from "next/image";
import FooterNav from "./FooterNav";
import SnsLinks from "../SnsLinks";
import Logo from "../../../public/images/Logo.svg";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer className="margin-global bottom-0 border-t border-grey-200 font-paragraph text-grey-200">
      <div className="flex flex-col md:flex-row justify-between">
        <FooterNav />
        <div className="flex flex-col justify-end">
          <ul className="flex justify-center lg:m-auto text-grey-200">
            <SnsLinks />
          </ul>
            <Link href="/" className="p-3 mx-auto g-logo-to-home-link">
              <Image
                src={Logo}
                alt="Momo Gallery Logo"
                className="sm:cursor-pointer w-36 "
              />
            </Link>
            <p className="p-2 text-center text-sm lg:text-xs whitespace-nowrap">
              © {currentYear} Momo gallery. All rights reserved
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
