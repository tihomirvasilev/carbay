import React, { useState } from "react";
import firebase from "./firebase";

export const firebaseContext = React.createContext();

const AuthProvider = (props) => {
  const initState = {
    name: "",
    phone: "",
    email: "",
    password: "",
    rePassword: "",
  };
  const [inputs, setInputs] = useState(initState);
  const [errors, setErrors] = useState([]);
  const [token, setToken] = useState(null);

  const handleRegister = () => {
    firebase.register(
      inputs.name,
      inputs.phone,
      inputs.email,
      inputs.password,
      setErrors,
      setToken
    );
    console.log(errors, token);
  };

  const handleLogin = () => {
    firebase.login(inputs.email, inputs.password, setErrors, setToken);
    console.log(errors, token);
  };

  const handleLogout = () => {
    firebase.logout(setErrors, setToken);
  };

  return (
    <firebaseContext.Provider
      value={{
        handleRegister,
        handleLogin,
        token,
        inputs,
        setInputs,
        errors,
        handleLogout,
      }}
    >
      {props.children}
    </firebaseContext.Provider>
  );
};

export default AuthProvider;
