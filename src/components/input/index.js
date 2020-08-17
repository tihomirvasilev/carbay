import React from "react";
import { Form } from "react-bootstrap";

const Input = ({
  as,
  label,
  name,
  placeHolder,
  value,
  onChange,
  onBlur,
  type,
  errors,
  children,
}) => {
  return (
    <Form.Group>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control
        as={as}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        type={type || "text"}
        placeholder={placeHolder}
        value={value}
      >
        {children}
      </Form.Control>
      {errors[name] && <p>{errors[name]}</p>}
    </Form.Group>
  );
};

export default Input;
