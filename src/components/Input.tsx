import React, { Dispatch, SetStateAction, SyntheticEvent } from "react";
import { SignupData } from "types/signup";

type InputComponentProps = {
  value: string;
  field: string;
  type: string;
  placeholder: string;
  errors: SignupData;
  setValues: Dispatch<SetStateAction<SignupData>>;
};

export const InputComponent = ({
  value,
  field,
  errors,
  setValues,
  placeholder,
  type = "text"
}: InputComponentProps) => {
  const onChange = (e: SyntheticEvent) => {
    setValues((prevState: SignupData) => ({
      ...prevState,
      [field]: e.target.value
    }));
  };

  return (
    <div className="signup_field">
      <div className="signup_input-label">{field.toUpperCase()}</div>
      <input
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className="signup_component"
      />
      {errors[field] && (
        <div className="signup_error-message">{errors[field]}</div>
      )}
    </div>
  );
};
