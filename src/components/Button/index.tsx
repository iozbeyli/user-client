import classes from "./Button.module.scss";
import React from "react";

type Props = {
  children: string;
  type: "submit" | "button";
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  primary?: boolean;
  secondary?: boolean;
};

export default function Button({
  onClick,
  children,
  className,
  disabled,
  primary,
  secondary,
  type,
}: Props) {
  return (
    <button
      type={type}
      disabled={!!disabled}
      onClick={onClick || (() => {})}
      className={`${classes.button} ${secondary ? classes.secondary : ""} ${
        primary ? classes.primary : ""
      } ${className || ""}`}
    >
      {children}
    </button>
  );
}
