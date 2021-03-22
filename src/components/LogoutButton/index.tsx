import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/actions";
import Button from "../Button";
import classes from "./LogoutButton.module.scss";

export default function LogoutButton() {
  const dispatch = useDispatch();

  const clicked = () => {
    dispatch(logout());
  };
  return (
    <Button type="button" className={classes.button} primary onClick={clicked}>
      Logout
    </Button>
  );
}
