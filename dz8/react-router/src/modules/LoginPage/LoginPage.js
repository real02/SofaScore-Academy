import React from "react";
import useFormValidation from "../../utils/useFormValidation";
import validateAuth from "../../utils/validateAuth";
import { connect } from "react-redux";
import { userLoginFetch } from "../../redux/userLoginFetch";
import "./loginPage.css";
import { Link } from "react-router-dom";

const INITIAL_STATE = {
  username: "",
  password: "",
};

const LoginPage = () => {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting,
  } = useFormValidation(INITIAL_STATE, validateAuth, "login");

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
            disabled={isSubmitting || errors}
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

const mapDispatchToProps = (dispatch) => ({
  userLoginFetch: (userInfo) => dispatch(userLoginFetch(userInfo)),
});

export default connect(null, mapDispatchToProps)(LoginPage);
