import React from "react";

const ContactForm = () => {
  return (
    <div className="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl text-grey-100">
      <div className="flex">
        <h1 className="font-bold uppercase text-2xl lg:text-3xl font-title">
          Send me a <br /> message
        </h1>
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5 font-paragraph">
        <input
          className="w-full bg-gray-100 text-gray-200 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline caret-grey-100/70"
          type="text"
          placeholder="First Name*"
        />
        <input
          className="w-full bg-gray-100 text-gray-200 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline caret-grey-100/70"
          type="text"
          placeholder="Last Name*"
        />
        <input
          className="w-full bg-gray-100 text-gray-200 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline caret-grey-100/70"
          type="email"
          placeholder="Email*"
        />
      </div>
      <div className="my-4 font-paragraph">
        <textarea
          placeholder="Message*"
          className="w-full h-32 bg-gray-100 text-gray-200 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline caret-grey-100/70"
        ></textarea>
      </div>
      <div className="my-2 w-1/2 md:w-1/3 font-paragraph">
        <button
          className="uppercase text-sm sm:text-base whitespace-nowrap font-bold tracking-wide bg-grey-100 text-prime-100 p-3 rounded-lg w-full hover:bg-grey-100/80 focus:outline-none focus:shadow-outline active:ring active:ring-grey-100 active:bg-grey-100 transition-all"
        >
          Send Message
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
