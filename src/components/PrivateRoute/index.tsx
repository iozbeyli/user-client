import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { selectLoggedIn } from "../../redux/selectors";
import LogoutButton from "../LogoutButton";

export default function PrivateRoute({ children, ...rest }: any) {
  const loggedIn = useSelector(selectLoggedIn);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedIn ? (
          <Fragment>
            <LogoutButton />
            {children}
          </Fragment>
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        )
      }
    />
  );
}
