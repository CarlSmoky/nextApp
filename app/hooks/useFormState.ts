import { useState } from "react";

type formData = {
  fullname: string;
  email: string;
  subject: string;
  message: string;
};

const initialData: formData = {
  fullname: "",
  email: "",
  subject: "",
  message: "",
};

const useFormState = () => {
  const [data, setData] = useState<formData>(initialData);

  const updateFields = (fields: Partial<formData>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const resetForm = () => {
    setData(initialData);
  };

  return {data, updateFields, resetForm}
}

export default useFormState;