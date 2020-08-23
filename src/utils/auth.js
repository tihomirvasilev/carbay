import React, { useState, useEffect } from "react";
import firebase, { FirebaseContext } from "../firebase";

const AuthProvider = (props) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    firebase.auth.onAuthStateChanged(
      async (authUser) => {
        if (authUser) {
          const userDb = await firebase.getUserById(authUser.uid);
          authUser = {
            uid: authUser.uid,
            id: userDb ? userDb.id : "",
            displayName: authUser.displayName,
            isAdmin: userDb.roles === "admin" ? true : false,
            favorites: userDb.favorites,
          };
        }
        localStorage.setItem("authUser", JSON.stringify(authUser));
        setCurrentUser(authUser);
      },
      () => {
        localStorage.removeItem("authUser");
        setCurrentUser(null);
      }
    );
  }, []);

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
