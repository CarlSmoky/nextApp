import React from "react";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const ContactWrapper: React.FC = () => {
  return (
    <>
      <section className="margin-global mb-10" id="contact">
        <div className="flex flex-col lg:flex-row justify-center items-center shadow-2xl">
          <ContactForm/>
          <ContactInfo/>
        </div>
      </section>
    </>
  );
};

export default ContactWrapper;
