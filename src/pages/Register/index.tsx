import React from "react";
import { useSelector } from "react-redux";
import RegisterForm from "../../components/RegisterForm";
import { selectRegisterLoading } from "../../redux/selectors";

export default function Register() {
  const loading = useSelector(selectRegisterLoading);

  return <RegisterForm />;
}
