import React from "react";
import useFormValidation from "./useFormValidation";
import validateAuth from "./validateAuth";

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
  } = useFormValidation(INITIAL_STATE, validateAuth);

  return (
    <div className="container">
      <div className="section shadow">
        <div className="logo">SOFA</div>
        <div className="header">
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
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
