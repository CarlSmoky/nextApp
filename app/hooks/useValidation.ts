import { useState } from "react";

type formData = {
  fullname: string;
  email: string;
  subject: string;
  message: string;
};

type tempError = {
  fullname: boolean;
  email: boolean;
  subject: boolean;
  message: boolean;
};

const useValidation = (data: formData) => {
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

  const validate = () => {
    let tempErrors: Partial<tempError> = {};
    let isValid = true;

    ["fullname", "email", "subject", "message"].forEach((field) => {
      if (data[field as keyof formData].length <= 0) {
        tempErrors[field as keyof tempError] = true;
        isValid = false;
      }
    });

    setErrors({ ...tempErrors });
    return isValid;
  };

  return { errors, validate, setErrors };
};

export default useValidation;
