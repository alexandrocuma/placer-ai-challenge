import { InputComponent, SelectComponent } from "../components";
import { useForm, useStateCityAPI } from "../hooks";
import React from "react";

export const Signup: React.FC = () => {
  const { values, errors, setValues, handleSubmit } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      city: "",
      state: "",
      email: "",
      password: ""
    }
  });
  const { states, cities } = useStateCityAPI({ state: values.state });

  return (
    <form onSubmit={handleSubmit}>
      <div className="signup">
        <InputComponent
          errors={errors}
          field="firstName"
          setValues={setValues}
          value={values.firstName}
          placeholder="Write your firstName..."
        />
        <InputComponent
          errors={errors}
          field="lastName"
          setValues={setValues}
          value={values.lastName}
          placeholder="Write your lastName..."
        />
        <SelectComponent
          errors={errors}
          setValues={setValues}
          field={"state"}
          data={states}
        />
        <SelectComponent
          errors={errors}
          setValues={setValues}
          field={"city"}
          data={cities}
        />
        <InputComponent
          errors={errors}
          type="email"
          field="email"
          setValues={setValues}
          value={values.email}
          placeholder="Write your email..."
        />
        <InputComponent
          errors={errors}
          type="password"
          field="password"
          setValues={setValues}
          value={values.password}
          placeholder="Set your password..."
        />
        <button className="signup_submit-button" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};
