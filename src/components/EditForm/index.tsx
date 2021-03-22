import React from "react";
import { useDispatch } from "react-redux";
import { edit } from "../../redux/actions";
import { User } from "../../typings";
import Card from "../Card";
import Form, { Errors, Values } from "../Form";

type Props = { user?: User };

export default function EditForm({ user }: Props) {
  const dispatch = useDispatch();
  const fields = [
    { label: "Name", name: "name", type: "name" },
    { label: "Email", name: "email", type: "email" },
  ];
  const initialValues = { email: user?.email || "", name: user?.name || "" };
  const validate = (values: Values): Errors => {
    const errors: Errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.name) {
      errors.name = "Required";
    }

    return errors;
  };

  const onSubmit = (values: Values) => {
    if (user) {
      dispatch(edit(user.id, values.email, values.name));
    }
  };

  return (
    <Card>
      <Form
        fields={fields}
        title={`Edit ${user?.name}`}
        initialValues={initialValues}
        validate={validate}
        submitTitle="Confirm"
        onSubmit={onSubmit}
      />
    </Card>
  );
}
