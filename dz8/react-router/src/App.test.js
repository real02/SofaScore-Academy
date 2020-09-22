import React from "react";
import {
  render,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import App from "./App";

// function renderWithProviders(component) {
//   return render(
//     <Provider store={store}>
//       <BrowserRouter>{component}</BrowserRouter>
//     </Provider>
//   );
// }

test("login with errors", () => {
  const username = "dino";
  const password = "";

  const errorMessage = "Required Password";

  const { getByPlaceholderText, getByRole, getByText } = render(<App />);

  fireEvent.click(getByPlaceholderText(/password/i));
  // fireEvent.change(getByPlaceholderText(/password/i), {
  //   target: { value: password },
  // });
  // fireEvent.click(getByRole('button', {name: /login/i}))

  expect(getByText(errorMessage)).toBeInTheDocument()
});

const username = "testUser";
const password = "testUser-password";

test("successfull login", async () => {
  const { getByText, getByRole, getByPlaceholderText } = render(<App />);

  fireEvent.change(getByPlaceholderText(/username/i), {
    target: { value: username },
  });

  fireEvent.change(getByPlaceholderText(/password/i), {
    target: { value: password },
  });

  fireEvent.click(getByRole("button", { name: /login/i }));

  await waitFor(() => getByText(/home/i));
});

