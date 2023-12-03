import React from "react";
import Link from "next/link";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { IoIosPin } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const ContactInfo = () => {
  return (
    <div className="w-full lg:w-1/3 px-8 py-12 ml-auto bg-prime-100">
      <div className="flex flex-col text-grey-100">
        <h1 className="font-bold uppercase text-2xl lg:text-3xl my-4 font-title">
          Drop in my gallery
        </h1>
        <div className="flex my-4 w-2/3 lg:w-1/2">
          <div className="flex flex-col p-1">
            <IoIosPin/>
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-title">Gallery</h2>
            <Link href="https://maps.app.goo.gl/461nGG59xpnmvXNt7">
              <p className="text-base font-paragraph">
                692 St Clarens Ave #8, Toronto, ON M6H 3X1
              </p>
            </Link>
          </div>
        </div>

        <div className="flex my-4 w-2/3 lg:w-1/2">
        <div className="flex flex-col p-1">
            <MdEmail />
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-title">Email</h2>
            <Link href="mailto:performernoriko@gmail.com?subject=Mail from our Website">
              <p className="text-base font-paragraph">
                performernoriko@gmail.com
              </p>
            </Link>
          </div>
        </div>

        <div className="flex my-4 w-2/3 lg:w-1/2">
          <Link
            href="https://www.instagram.com/noriko_toronto/"
            className="p-2 m-2"
          >
            <BsInstagram size={25} />
            <span className="sr-only">instagram</span>
          </Link>
          <Link
            href="https://www.youtube.com/@norikoyamamoto7147"
            className="p-2 m-2"
          >
            <BsYoutube size={25} />
            <span className="sr-only">youtube</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
