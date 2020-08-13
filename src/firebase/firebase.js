import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

import firebaseConfig from "./config";

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = app.firestore();
    this.storage = app.storage();
  }

  register(name, phone, email, password) {
    this.auth
      .createUserWithEmailAndPassword(email, password)
      .then(async (res) => {
        res.user.updateProfile({
          displayName: name,
        });

        this.db.collection("users").add({
          uid: res.user.uid,
          phoneNumber: phone,
        });

        const token = await Object.entries(res.user)[5][1].b;
        localStorage.setItem("auth-token", token);
      });
  }

  login(email, password) {
    this.auth.signInWithEmailAndPassword(email, password).then(async (res) => {
      const token = await Object.entries(res.user)[5][1].b;
      localStorage.setItem("auth-token", token);
    });
  }

  logout() {
    this.auth.signOut().then(async (res) => {
      await localStorage.removeItem("auth-token");
    });
  }
}

const firebase = new Firebase();
export default firebase;
