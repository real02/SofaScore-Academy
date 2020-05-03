import React from "react";
import useFormValidation from "../../utils/useFormValidation";
import validateAuth from "../../utils/validateAuth";
import "./loginPage.css";
import { Link, useHistory } from "react-router-dom";
import { setUser } from "../../redux/actions";
import { requestOptions } from "../../api/requestOptions";
import { useDispatch } from "react-redux";

const INITIAL_STATE = {
  username: "",
  password: "",
};

const LoginPage = () => {
  const { handleChange, handleBlur, values, errors } = useFormValidation(
    INITIAL_STATE,
    validateAuth
  );

  const dispatch = useDispatch()
  const history = useHistory()

  const hasErrors = !!Object.keys(errors).length;

  const handleSubmit = () => {
    if (!hasErrors) {
      fetch(
        "https://private-leagues-api.herokuapp.com/api/login",
        requestOptions(values)
      )
        .then((resp) => resp.json())
        .then((data) => {
          if (data.error) {
            // here handle errors validation etc.
          } else {
            dispatch(setUser(data));
            history.push("/")
          }
        });
    }
  };

  return (
    <div className="container">
      <div className="section shadow">
        <div className="logo-right-part-background">
          <div className="logo-left-part-background">
            <div className="logo-back-of-sofa"></div>
            <div className="logo-sofa-seat"></div>
          </div>
        </div>
        <div className="form">
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            type="text"
            name="username"
            value={values.username}
            placeholder="Username/email"
            className={`form-field animation a3 ${
              errors.username && "error-input"
            }`}
          />
          {errors.username && <p className="error-text">{errors.username}</p>}
          <input
            onChange={handleChange}
            onBlur={handleBlur}
            type="password"
            name="password"
            value={values.password}
            placeholder="Password"
            className={`form-field animation a4 ${
              errors.password && "error-input"
            }`}
          />
          {errors.password && <p className="error-text">{errors.password}</p>}
          <button
            className="animation a6"
            onClick={handleSubmit}
            disabled={hasErrors}
          >
            Login
          </button>
          <div className="animation a7">
            <Link to={`/signUp`}>Don't have an account, Sign Up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
