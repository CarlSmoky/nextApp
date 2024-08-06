"use client";
import React, { FormEvent, useState } from "react";
import useFormState from "../../hooks/useFormState";
import useMessageRefs from "../../hooks/useMessageRefs";
import useValidation from "../../hooks/useValidation";

const ContactForm = () => {
  const { data, updateFields, resetForm } = useFormState();
  const { errors, validate, setErrors } = useValidation(data);
  const {
    successMessageRef,
    failureMessageRef,
    errorMessageRef,
    showSuccessMessage,
    showFailureMessage,
    setShowSuccessMessage,
    setShowFailureMessage,
  } = useMessageRefs(errors);

  const [sendStatus, setSendStatus] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const isValidForm = validate();

    if (!isValidForm) {
      resetMessages();
      return;
    }

    setSendStatus(true);

    try {
      const res = await fetch("/api/sendgrid", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      const result = await res.json();
      handleResponse(result, res.status);
    } catch (error) {
      setShowFailureMessage(true);
    } finally {
      setSendStatus(false);
    }
  };

  const handleResponse = (result: any, status: number) => {
    if (result.error) {
      setShowFailureMessage(true);
      setShowSuccessMessage(false);
    } else if (status === 200) {
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      resetForm();
      setErrors({});
    }
  };

  const resetMessages = () => {
    setShowSuccessMessage(false);
    setShowFailureMessage(false);
  };

  const errorFileds = Object.keys(errors).join(", ");

  return (
    <form
      className="w-full lg:w-2/3 p-8  my-3 mr-auto text-grey-100"
      onSubmit={handleSubmit}
    >
      <h2 className="font-bold text-2xl lg:text-3xl font-title" tabIndex={-1}>
        Send me a message
      </h2>
      <div className="font-paragraph">
        {Object.entries(errors).some(([k, v]) => v === true) && (
          <span ref={errorMessageRef} tabIndex={-1} className="text-red-100">
            Please fill in {errorFileds}.{" "}
          </span>
        )}
        {showSuccessMessage && (
          <span
            id="g-success-message"
            ref={successMessageRef}
            tabIndex={-1}
            role="alert"
          >
            Your message has been sent
          </span>
        )}
        {showFailureMessage && (
          <span
            className="text-red-100"
            ref={failureMessageRef}
            tabIndex={-1}
            role="alert"
          >
            Fail to send message, try gain
          </span>
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
          className="text-sm sm:text-base whitespace-nowrap font-bold tracking-wide bg-grey-100/80 text-prime-100 p-3 w-full hover:bg-grey-100 focus:outline-offset-4 active:ring active:ring-grey-100 active:bg-grey-100 transition-all"
          type="submit"
        >
          {sendStatus ? "Sending" : "Send Message"}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
