import React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
import LoginPage from "./LoginPage";
import { Provider } from "react-redux";
import { store } from "../state/store";
import { BrowserRouter } from "react-router-dom";

function renderWithProviders(component) {
  return render(
    <Provider store={store}>
      <BrowserRouter>{component}</BrowserRouter>
    </Provider>
  );
}

describe("LoginPage", () => {
  it("submits username and password", () => {
    const username = "dinoavdic";
    const password = "da123pass";

    const { getByPlaceholderText, getByRole } = renderWithProviders(
      <LoginPage />
    );

    fireEvent.change(getByPlaceholderText(/username/i), {
      target: { value: username },
    });

    fireEvent.change(getByPlaceholderText(/password/i), {
      target: { value: password },
    });

    fireEvent.click(getByRole("button", { name: /login/i }));

    console.log(window.location.pathname)

    // expect(onSubmit).toHaveBeenCalledTimes(1);
    // expect(onSubmit).toHaveBeenCalledWith({ username, password });
  });

  it("indicates error/s in form field/s", () => {
    const username = "dinoavdic";
    const password = "";
    const onSubmit = jest.fn();

    const errorMessage = "Password must be at least 6 characters";

    const { getByPlaceholderText, getByRole } = renderWithProviders(
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
