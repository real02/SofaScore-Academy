import React from "react";
import { Redirect, Route } from "react-router-dom";

export function ProtectedRoute({ children, ...otherProps }) {
  return localStorage.getItem("token") ? (
    <Route {...otherProps}>{children}</Route>
  ) : (
    <Redirect to="/" />
  );
}
