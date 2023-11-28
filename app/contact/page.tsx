import React from "react";
import type { Metadata } from "next";
import ContactWrapper from "../components/Contact/ContactWrapper";

export const metadata: Metadata = {
  title: "Contact",
};

const ContactPage: React.FC = () => {
  return <ContactWrapper />;
};

export default ContactPage;
