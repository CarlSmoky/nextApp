import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactWrapper: React.FC = () => {
  return (
    <>
      <div className="margin-global flex justify-center items-center mb-10">
        <div className="mx-auto w-full">
          <ContactForm/>
          <ContactInfo/>
        </div>
      </div>
    </>
  );
};

export default ContactWrapper;
