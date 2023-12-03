import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactWrapper: React.FC = () => {
  return (
    <>
      <div className="margin-global mb-10 shadow-2xl" id="contact">
        <div className="flex flex-col lg:flex-row justify-center items-center">
          <ContactForm/>
          <ContactInfo/>
        </div>
      </div>
    </>
  );
};

export default ContactWrapper;
