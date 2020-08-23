import React from "react";
import { Form } from "react-bootstrap";
import styles from "./index.module.css";

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
      {errors[name] && <p className={styles.error}>* {errors[name]}</p>}
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
    </Form.Group>
  );
};

export default Input;
