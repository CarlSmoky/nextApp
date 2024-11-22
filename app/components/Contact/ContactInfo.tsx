import Link from "next/link";
import { IoIosPin } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import SnsLinks from "../SnsLinks";

const ContactInfo:React.FC = () => {
  return (
    <div className="w-full lg:w-1/3 px-8 lg:px-3 py-12 bg-prime-100">
      <div className="flex flex-col text-grey-100">
        <h3 className="font-bold text-2xl lg:text-3xl my-4 font-title">
          Gallery hours:
          <br/>
          By appointment
        </h3>
        <Link href="https://maps.app.goo.gl/461nGG59xpnmvXNt7" target="_blank">
          <div className="flex my-4">
            <div className="flex flex-col pt-1 pr-1">
              <IoIosPin size={23} />
            </div>
            <div className="flex flex-col">
              <h4 className="text-xl font-title">Gallery</h4>
              <p className="text-base font-paragraph">
              <span className="whitespace-nowrap">692 St.Clarens Ave. Studio #8</span>
                <br />
                Toronto, ON
                <br />
                M6H 3X1 CANADA
              </p>
            </div>
          </div>
        </Link>

        <Link href="mailto:performernoriko@gmail.com?subject=Mail from web site">
          <div className="flex my-4 w-2/3 lg:w-1/2">
            <div className="flex flex-col pt-1 pr-1">
              <MdEmail size={23} />
            </div>
            <div className="flex flex-col">
              <h4 className="text-xl font-title">Email</h4>
              <p className="text-base font-paragraph">
                performernoriko@gmail.com
              </p>
            </div>
          </div>
        </Link>

        <ul className="flex my-4">
          <SnsLinks/>
        </ul>
      </div>
    </div>
  );
};

export default ContactInfo;
