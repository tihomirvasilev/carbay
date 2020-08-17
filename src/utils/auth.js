import React, { useState, useEffect } from "react";
import FirebaseContext from "../firebase/context";
import firebase from "../firebase";

const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    firebase.auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  if (pending) {
    return <>Loading..</>;
  }
  return (
    <FirebaseContext.Provider
      value={{
        currentUser,
        firebase,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default AuthProvider;
