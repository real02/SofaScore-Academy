import React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
import LoginPage from "./LoginPage";

describe("LoginPage", () => {
  it("submits username and password", () => {
    const username = "dinoavdic";
    const password = "da123pass";
    const onSubmit = jest.fn();
    const { getByPlaceholderText, getByRole } = render(
      <LoginPage onSubmit={onSubmit} />
    );

    fireEvent.change(getByPlaceholderText(/username/i), {
      target: { value: username },
    });

    fireEvent.change(getByPlaceholderText(/password/i), {
      target: { value: password },
    });

    fireEvent.click(getByRole("button", { name: /login/i }));

    expect(onSubmit).toHaveBeenCalledTimes(1);
    expect(onSubmit).toHaveBeenCalledWith({ username, password });
  });

  it("indicates error/s in form field/s", () => {
    const username = "dinoavdic";
    const password = "";
    const onSubmit = jest.fn();

    const errorMessage = "Password must be at least 6 characters";

    const { getByPlaceholderText, getByRole } = render(
      <LoginPage onSubmit={onSubmit} />
    );

    fireEvent.change(getByPlaceholderText(/username/i), {
      target: { value: username },
    });

    fireEvent.change(getByPlaceholderText(/password/i), {
      target: { value: password },
    });

    fireEvent.click(getByRole("button", { name: /login/i }));

    expect(getByText(errorMessage)).toBeInTheDocument();
  });
});
