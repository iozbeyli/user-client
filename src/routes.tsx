import React from "react";
import { Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import OnlyPublicRoute from "./components/OnlyPublicRoute";

import Edit from "./pages/Edit";
import Home from "./pages/home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Users from "./pages/Users";

export default function Routes() {
  return (
    <Switch>
      <OnlyPublicRoute path="/register">
        <Register />
      </OnlyPublicRoute>
      <OnlyPublicRoute path="/login">
        <Login />
      </OnlyPublicRoute>
      <PrivateRoute path="/edit/:id">
        <Edit />
      </PrivateRoute>
      <PrivateRoute path="/">
        <Users />
      </PrivateRoute>
    </Switch>
  );
}
