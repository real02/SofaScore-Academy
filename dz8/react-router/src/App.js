import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./modules/LoginPage/LoginPage";
import SignUpPage from "./modules/SignUp/SignUpPage";
import { HomePage } from "./modules/HomePage/HomePage";
import { Provider } from "react-redux";
import { store } from "./state/store";
import { ProtectedRoute } from "./api/ProtectedRoute";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "./state/store";

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

// const mapDispatchToProps = dispatch => ({
//   getProfileFetch: () => dispatch(getProfileFetch())
// })

// export default connect(null, mapDispatchToProps)(App);

export default App;
