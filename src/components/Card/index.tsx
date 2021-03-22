import React from "react";
import classes from "./Card.module.scss";
type Props = { children: any };

export default function Card({ children }: Props) {
  return <div className={classes.card}>{children}</div>;
}
