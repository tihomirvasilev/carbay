import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import firebaseConfig from "./config";

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = app.firestore();
  }

  register(name, phone, email, password, setToken, setErrors) {
    this.auth
      .createUserWithEmailAndPassword(email, password)
      .then(async (res) => {
        this.db.collection("users").add({
          uid: res.user.uid,
          name: name,
          phone: phone,
        });

        const token = await Object.entries(res.user)[5][1].b;
        await localStorage.setItem("auth-token", token);
        setToken(token);
      })
      .catch((err) => {
        setErrors((prev) => [...prev, err.message]);
      });
  }

  login(email, password, setErrors, setToken) {
    this.auth
      .signInWithEmailAndPassword(email, password)
      .then(async (res) => {
        const token = await Object.entries(res.user)[5][1].b;
        await localStorage.setItem("token", token);

        setToken(window.localStorage.token);
      })
      .catch((err) => {
        setErrors((prev) => [...prev, err.message]);
      });
  }

  logout(setErrors, setToken) {
    this.auth
      .signOut()
      .then((res) => {
        localStorage.removeItem("token");
        setToken(null);
      })
      .catch((err) => {
        setErrors((prev) => [...prev, err.message]);
        localStorage.removeItem("token");
        setToken(null);
        console.error(err.message);
      });
  }

  async resetPassword(email) {
    await this.auth.sendPasswordResetEmail(email);
  }
}

const firebase = new Firebase();
export default firebase;
