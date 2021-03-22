import React from "react";
import { useHistory } from "react-router";
import Button from "../Button";
import classes from "./BackButton.module.scss";

export default function BackButton() {
  const history = useHistory();

  const clicked = () => {
    history.goBack();
  };

  return (
    <Button type="button" className={classes.button} primary onClick={clicked}>
      Back
    </Button>
  );
}
