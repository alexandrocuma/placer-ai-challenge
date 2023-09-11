import { useState, SyntheticEvent } from "react";
import { SignupData } from "../types/signup";

type useSubmitFormProps = {
  defaultValues: SignupData;
};

const defaultErrorValues = {
  firstName: "",
  lastName: "",
  state: "",
  city: "",
  email: "",
  password: ""
};

export const useForm = ({ defaultValues }: useSubmitFormProps) => {
  const [values, setValues] = useState<SignupData>(defaultValues);
  const [errors, setErrors] = useState<SignupData>(defaultErrorValues);

  const verifyData = (field: string, value: string) => {
    if (!value) {
      return "Field required";
    }
    if (field === "email") {
      const emailRegexp = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
      if (!emailRegexp.test(value)) {
        return "Email not valid";
      }
    }
  };

  const handleSubmit = (e: SyntheticEvent) => {
    setErrors(defaultErrorValues);
    e.preventDefault();
    const errorMessages = Object.keys(values).reduce((acc, field) => {
      const error = verifyData(field, values[field]);
      return { ...acc, [field]: error || null };
    }, {});

    const isValidData = Object.values(errorMessages).every((value) =>
      value ? false : true
    );

    if (isValidData) {
      console.log("Submitted Data", values);
      alert("Data Submitted");
    } else {
      console.log("Data Errors", errorMessages);
      setErrors(errorMessages);
    }
  };

  return {
    values,
    errors,
    setValues,
    handleSubmit
  };
};
