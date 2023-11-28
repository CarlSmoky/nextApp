import React from "react";
import Link from "next/link";

const ContactInfo = () => {
  return (
    <div className="w-full lg:-mt-[500px] lg:w-2/6 px-8 py-12 ml-auto bg-grey-100 rounded-lg">
      <div className="flex flex-col text-prime-100">
        <h1 className="font-bold uppercase text-2xl lg:text-3xl my-4 font-title">
          Drop in my gallery
        </h1>
        <p className="font-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          tincidunt arcu diam, eu feugiat felis fermentum id. Curabitur vitae
          nibh viverra, auctor turpis sed, scelerisque ex.
        </p>

        <div className="flex my-4 w-2/3 lg:w-1/2">
          <div className="flex flex-col">
            <i className="fas fa-map-marker-alt pt-2 pr-2" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-title">Gallery</h2>
            <p className="text-base font-paragraph">
            692 St Clarens Ave #8, Toronto, ON M6H 3X1
            </p>
          </div>
        </div>

        <div className="flex my-4 w-2/3 lg:w-1/2">
          <div className="flex flex-col">
            <i className="fas fa-phone-alt pt-2 pr-2" />
          </div>
          <div className="flex flex-col">
            <h2 className="text-xl font-title">Email Address</h2>
            <p className="text-base font-paragraph">
              <Link href="mailto:performernoriko@gmail.com?subject=Mail from our Website">
                performernoriko@gmail.com
              </ Link>
            </p>
          </div>
        </div>

        <div className="flex my-4 w-2/3 lg:w-1/2">
          <a
            href="https://www.facebook.com/ENLIGHTENEERING/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
          >
            <i className="fab fa-facebook-f text-blue-900" />
          </a>
          <a
            href="https://www.linkedin.com/company/enlighteneering-inc-"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-white h-8 w-8 inline-block mx-1 text-center pt-1"
          >
            <i className="fab fa-linkedin-in text-blue-900" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
