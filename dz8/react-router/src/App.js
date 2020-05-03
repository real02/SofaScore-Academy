import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./modules/LoginPage/LoginPage";
import SignUpPage from "./modules/SignUp/SignUpPage";
import { HomePage } from "./modules/HomePage/HomePage";
import { Provider } from "react-redux";
import { store, persistor } from "./state/store";
import { ProtectedRoute } from "./api/ProtectedRoute";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <Switch>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route path="/signUp">
              <SignUpPage />
            </Route>
            <ProtectedRoute exact path="/">
              <HomePage />
            </ProtectedRoute>
            <Route path="*">
              <h1>404 - page not found</h1>
            </Route>
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
