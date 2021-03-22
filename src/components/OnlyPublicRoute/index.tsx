import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { selectLoggedIn } from "../../redux/selectors";

export default function OnlyPublicRoute({ children, ...rest }: any) {
  const loggedIn = useSelector(selectLoggedIn);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !loggedIn ? (
          children
        ) : (
          <Redirect to={{ pathname: "/", state: { from: location } }} />
        )
      }
    />
  );
}
