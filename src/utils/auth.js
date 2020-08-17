import React, { useState, useEffect } from "react";
import FirebaseContext from "../firebase/context";
import firebase from "../firebase";

const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    firebase.auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        const userDb = await firebase.getUserById(authUser.uid);

        authUser = {
          isAdmin: userDb.roles === "admin" ? true : false,
          favorites: userDb.favorites,
          ...authUser,
        };
      }
      setCurrentUser(authUser);
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
