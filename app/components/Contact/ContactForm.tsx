"use client";
import React, { FormEvent, useState } from "react";

type formData = {
  fullname: string;
  email: string;
  subject: string;
  message: string;
};

const initialData = {
  fullname: "",
  email: "",
  subject: "",
  message: "",
};

type tempError = {
  fullname: boolean;
  email: boolean;
  subject: boolean;
  message: boolean;
};

const ContactForm = () => {
  const [data, setData] = useState<formData>(initialData);
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);
  const [sendStatus, setSendStatus] = useState(false);

  const updateFields = (fields: Partial<formData>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const handleValidation = () => {
    let tempErrors: Partial<tempError> = {};
    let isValid = true;

    if (data.fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (data.email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (data.subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (data.message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    return isValid;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    let isValidForm = handleValidation();

    if (!isValidForm) {
      setSendStatus(false);
      return;
    }


    if (isValidForm) {
      setSendStatus(false);
  
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: data.email,
          fullname: data.fullname,
          subject: data.subject,
          message: data.message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      
      const { error} = await res.json();

      if (error) {
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        return;
      }
      if (res.status === 200) {
        setShowSuccessMessage(true);
        setShowFailureMessage(false);
        setErrors({});
        setData(initialData);
      }
    }
  };

  const errorFileds = Object.keys(errors).join(", ");

  return (
    <form
      className="w-full lg:w-2/3 p-8  my-3 mr-auto text-grey-100"
      onSubmit={handleSubmit}
    >
      <div className="flex">
        <h1 className="font-bold text-2xl lg:text-3xl font-title">
          Send me a <br /> message
        </h1>
      </div>
      <div className="font-paragraph">
        {Object.entries(errors).some(([k, v]) => v === true) && (
          <span className="text-red-100">Please fill in {errorFileds}. </span>
        )}
        {showSuccessMessage && <span>Your message has been sent</span>}
        {showFailureMessage && (
          <span className="text-red-100">Fail to send message, try gain</span>
        )}
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5 font-paragraph">
        <label htmlFor="fullname" className="sr-only">
          full name
        </label>
        <input
          className={`w-full bg-gray-100 text-gray-200 mt-2 p-3 focus:outline-none focus:shadow-outline caret-grey-100/70 ${
            errors.fullname ? "ring-1 ring-red-100" : ""
          }`}
          id="fullname"
          type="text"
          placeholder="Full Name*"
          name="fullname"
          value={data.fullname}
          onChange={(e) => {
            updateFields({ fullname: e.target.value });
          }}
        />
        <label htmlFor="email" className="sr-only">
          email
        </label>
        <input
          className={`w-full bg-gray-100 text-gray-200 mt-2 p-3 focus:outline-none focus:shadow-outline caret-grey-100/70 ${
            errors.email ? "ring-1 ring-red-100" : ""
          }`}
          id="email"
          type="email"
          placeholder="Email*"
          name="email"
          value={data.email}
          onChange={(e) => {
            updateFields({ email: e.target.value });
          }}
        />
        <label htmlFor="subject" className="sr-only">
          subject
        </label>
        <input
          className={`w-full bg-gray-100 text-gray-200 mt-2 p-3 focus:outline-none focus:shadow-outline caret-grey-100/70 ${
            errors.subject ? "ring-1 ring-red-100" : ""
          }`}
          id="subject"
          type="text"
          placeholder="Subject*"
          name="subject"
          value={data.subject}
          onChange={(e) => {
            updateFields({ subject: e.target.value });
          }}
        />
      </div>
      <div className="my-4 font-paragraph">
        <label htmlFor="message" className="sr-only">
          message
        </label>
        <textarea
          placeholder="Message*"
          className={`w-full bg-gray-100 text-gray-200 mt-2 p-3 focus:outline-none focus:shadow-outline caret-grey-100/70 ${
            errors.message ? "ring-1 ring-red-100" : ""
          }`}
          id="message"
          name="message"
          value={data.message}
          onChange={(e) => {
            updateFields({ message: e.target.value });
          }}
        ></textarea>
      </div>
      <div className="my-2 w-1/2 md:w-1/3 font-paragraph">
        <button
          className="text-sm sm:text-base whitespace-nowrap font-bold tracking-wide bg-grey-100/80 text-prime-100 p-3 w-full hover:bg-grey-100 focus:outline-none focus:shadow-outline active:ring active:ring-grey-100 active:bg-grey-100 transition-all"
          type="submit"
        >
          {sendStatus ? "Sending" : "Send Message"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
