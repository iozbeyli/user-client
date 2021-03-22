import React from "react";
import classes from "./Layout.module.scss";

type Props = { children: any | Array<any> };

export default function Layout({ children }: Props) {
  return <div className={classes.container}>{children}</div>;
}
