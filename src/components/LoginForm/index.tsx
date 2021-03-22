import React from "react";
import { useDispatch } from "react-redux";
import { login } from "../../redux/actions";
import Card from "../Card";
import CustomForm, { Errors, Values } from "../Form";

export default function LoginForm() {
  const dispatch = useDispatch();
  const fields = [
    { label: "Email", name: "email", type: "email" },
    { label: "Password", name: "password", type: "password" },
  ];
  const initialValues = { email: "", password: "" };
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
    return errors;
  };

  const onSubmit = (values: Values) => {
    dispatch(login(values.email, values.password));
  };

  return (
    <Card>
      <CustomForm
        fields={fields}
        title="Login"
        initialValues={initialValues}
        validate={validate}
        submitTitle="Login"
        onSubmit={onSubmit}
        link={{ to: "/register", title: "Register" }}
      />
    </Card>
  );
}
