import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./modules/LoginPage/LoginPage";
import SignUpPage from "./modules/SignUp/SignUpPage";
import { HomePage } from "./modules/HomePage/HomePage";
import { Provider } from "react-redux";
import { store } from "./state/store";
import { useSelector, connect } from "react-redux";
import { setLoggedInStatus } from "./redux/actions";
import {ProtectedRoute} from "./modules/ProtectedRoute"
import {getProfileFetch} from "./redux/getProfileFetch"

function App() {
  //const isLoggedIn = useSelector((state) => state.status);

  const toogleLogin = React.useCallback(() => {
    setLoggedInStatus((previous) => !previous);
  });

  // React.useEffect(() => {
  //   this.props.getProfileFetch()
  // })

  console.log(store.getState())

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route path="/signUp">
            <SignUpPage />
          </Route>
          <ProtectedRoute path="/home">
            <HomePage />
          </ProtectedRoute>
          <Route path="*">
            <h1>404 - page not found</h1>
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

// const mapDispatchToProps = dispatch => ({
//   getProfileFetch: () => dispatch(getProfileFetch())
// })

// export default connect(null, mapDispatchToProps)(App);

export default App