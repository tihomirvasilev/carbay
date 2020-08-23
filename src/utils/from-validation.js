import React from "react";

function FormValidation(initialState, validate, callback) {
  const [values, setValues] = React.useState(initialState);
  const [errors, setErrors] = React.useState({});

  function handleChange(event) {
    event.persist();
    setValues((previousValues) => ({
      ...previousValues,
      [event.target.name]: event.target.value,
    }));
  }

  function handleBlur() {
    const validationErrors = validate(values);
    setErrors(validationErrors);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(errors).length === 0) {
      callback();
      setValues(initialState);
    }
  }

  return {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
  };
}

export default FormValidation;
