import { Dispatch, SetStateAction, SyntheticEvent } from "react";
import { SignupData } from "types/signup";

type SelectComponentProps = {
  data: [];
  field: string;
  errors: SignupData;
  setValues: Dispatch<SetStateAction<SignupData>>;
};

export const SelectComponent = ({
  data,
  errors,
  setValues,
  field
}: SelectComponentProps) => {
  const onChange = (e: SyntheticEvent) => {
    const value = e.target.value;
    setValues((prevState: SignupData) => ({
      ...prevState,
      [field]: value ?? null
    }));
  };

  return (
    <div className="signup_field">
      <div className="signup_input-label">{field.toUpperCase()}</div>
      <select className="signup_component" onChange={onChange} name={field}>
        <option value="">Select an Option</option>
        {data.map((opt) => (
          <option key={opt[`${field}_name`]} value={opt[`${field}_name`]}>
            {opt[`${field}_name`]}
          </option>
        ))}
      </select>
      {errors[field] && (
        <div className="signup_error-message">{errors[field]}</div>
      )}
    </div>
  );
};
