import React from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/actions";
import Card from "../Card";
import CustomForm, { Errors, Values } from "../Form";

export default function RegisterForm() {
  const dispatch = useDispatch();
  const fields = [
    { label: "Name", name: "name", type: "name" },
    { label: "Email", name: "email", type: "email" },
    { label: "Password", name: "password", type: "password" },
    {
      label: "Password Confirmation",
      name: "passwordConfirmation",
      type: "password",
    },
  ];
  const initialValues = {
    name: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  };
  const validate = (values: Values): Errors => {
    const errors: Errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    if (values.password !== values.passwordConfirmation) {
      errors.passwordConfirmation = "Passwords must match";
    }
    return errors;
  };

  const onSubmit = (values: Values) => {
    dispatch(register(values.name, values.email, values.password));
  };

  return (
    <Card>
      <CustomForm
        fields={fields}
        title="Register"
        initialValues={initialValues}
        validate={validate}
        submitTitle="Register"
        onSubmit={onSubmit}
        link={{ to: "/login", title: "Login" }}
      />
    </Card>
  );
}
