import React, { useState } from "react";
import { authMethods } from "../firebase/auth-methods";

export const firebaseAuth = React.createContext();

const AuthProvider = (props) => {
  const initState = { email: "", password: "" };
  const [inputs, setInputs] = useState(initState);
  const [errors, setErrors] = useState([]);
  const [token, setToken] = useState(null);

  const handleSignUp = () => {
    // middle man between firebase and signup
    console.log("handleSignup");
    // calling signup from firebase server
    authMethods.signUp(inputs.email, inputs.password, setErrors, setToken);
    console.log(errors, token);
  };

  const handleSignIn = () => {
    //changed to handleSingIn
    console.log("handleSignIn!!!!");
    // made signup signIn
    authMethods.signIn(inputs.email, inputs.password, setErrors, setToken);
    console.log(errors, token);
  };

  const handleSignOut = () => {
    authMethods.signOut(setErrors, setToken);
  };

  return (
    <firebaseAuth.Provider
      value={{
        //replaced test with handleSignup
        handleSignUp,
        handleSignIn,
        token,
        inputs,
        setInputs,
        errors,
        handleSignOut,
      }}
    >
      {props.children}
    </firebaseAuth.Provider>
  );
};

export default AuthProvider;
