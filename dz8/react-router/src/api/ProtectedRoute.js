import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

export function ProtectedRoute({ children, ...otherProps }) {
  const token = useSelector((state) => state.user.token);
  return token ? (
    <Route {...otherProps}>{children}</Route>
  ) : (
    <Redirect to="/login" />
  );
}
