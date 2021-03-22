import React, { Fragment } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import classes from "./Form.module.scss";
import Button from "../Button";
import { Link } from "react-router-dom";

export type Values = { [key: string]: string };

export type Errors = { [key: string]: string };

export type Fields = Array<{ label: string; name: string; type: string }>;

type Props = {
  fields: Fields;
  initialValues: Values;
  validate: (values: Values) => Errors;
  onSubmit: (values: Values) => void;
  submitTitle: string;
  title: string;
  link?: { to: string; title: string };
};

export default function CustomForm({
  initialValues,
  validate,
  onSubmit,
  submitTitle,
  title,
  fields,
  link = undefined,
}: Props) {
  return (
    <div>
      <h1 className={classes.title}>{title}</h1>
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={(values, { setSubmitting }) => {
          onSubmit(values);
          setSubmitting(false);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={classes.form}>
            {fields.map((field) => (
              <Fragment key={field.name}>
                <label htmlFor={field.name}>{field.label}</label>
                <Field
                  className={classes.field}
                  type={field.type}
                  name={field.name}
                />
                <ErrorMessage
                  className={classes.error}
                  name={field.name}
                  component="div"
                />
              </Fragment>
            ))}
            <Button
              primary
              className={classes.button}
              type="submit"
              disabled={isSubmitting}
            >
              {submitTitle || "Submit"}
            </Button>
            {link ? (
              <Link className={classes.link} to={link.to}>
                {link.title}
              </Link>
            ) : null}
          </Form>
        )}
      </Formik>
    </div>
  );
}
