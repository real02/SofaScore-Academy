import React from "react";
import {useDispatch, useSelector} from "react-redux"
import { setLoggedInStatus, setUsername, setPassword } from "../redux/actions";

const useFormValidation = (initialState, validate, typeOfForm) => {
  const [values, setValues] = React.useState(initialState);
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setSubmitting] = React.useState(false);

  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  React.useEffect(() => {
    let username = values.username
    let password = values.password
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password
      }),
    };
    fetch(
      `https://private-leagues-api.herokuapp.com/api/${typeOfForm}`,
      requestOptions
    ).then((response) => {
      response.json().then(console.log()).catch();
    });
  }, [isSubmitting]);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleBlur = () => {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    setSubmitting(true);
    dispatch(setUsername(values.username))
    dispatch(setPassword(values.password))
  };

  return {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    isSubmitting,
  };
};

export default useFormValidation;
