import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

import { store } from "./state/store";
import { Provider } from "react-redux";

import { BrowserRouter } from "react-router-dom";

function renderWithProviders(component) {
  return render(
    <Provider store={store}>
      <BrowserRouter>{component}</BrowserRouter>
    </Provider>
  );
}

const username = "dinoavdic";
const password = "da123pass";

test("renders learn react link", () => {
  const {
    getByText,
    getByRole,
    debug,
    getByPlaceholderText,
  } = renderWithProviders(<App />);

  fireEvent.change(getByPlaceholderText(/username/i), {
    target: { value: username },
  });

  fireEvent.change(getByPlaceholderText(/password/i), {
    target: { value: password },
  });

  fireEvent.click(getByRole("button", { name: /login/i }));

  debug();
});
