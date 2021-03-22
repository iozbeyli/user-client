import React from "react";
import RegisterForm from "../../components/RegisterForm";
import classes from "./Home.module.scss";

export default function Home() {
  return (
    <div className={classes.container}>
      <RegisterForm />
    </div>
  );
}
