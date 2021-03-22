import React from "react";
import { useSelector } from "react-redux";
import LoginForm from "../../components/LoginForm";
import Page from "../../components/Page";
import { selectLoginLoading } from "../../redux/selectors";

export default function Login() {
  const loading = useSelector(selectLoginLoading);
  return (
    <Page loading={loading}>
      <LoginForm />
    </Page>
  );
}
