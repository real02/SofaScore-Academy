import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./modules/LoginPage/LoginPage";
import SignUpPage from "./modules/SignUp/SignUpPage";
import { HomePage } from "./modules/HomePage/HomePage";
import { Provider, useSelector } from "react-redux";
import { store, persistor } from "./state/store";
import { ProtectedRoute } from "./api/ProtectedRoute";
import { PersistGate } from "redux-persist/integration/react";
import { checkToken } from "./api/checkToken";

function Providers() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router>
          <App />
        </Router>
      </PersistGate>
    </Provider>
  );
}

function App() {
  const token = useSelector((state) => state.user.token);

  useEffect(() => {
    if(!token) {
      return 
    }

    async function fn() {
      const data = await checkToken(token);

      if(data.error) {
        // redirect to /login
      }

      console.log({ data });
    }
    fn();
    // eslint-disable-next-line
  }, []);

  return (
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
  );
}

export default Providers;
