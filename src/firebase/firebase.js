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

  register(name, phone, email, password, setToken) {
    this.auth
      .createUserWithEmailAndPassword(email, password)
      .then(async (res) => {
        this.db.collection("users").add({
          uid: res.user.uid,
          name: name,
          phone: phone,
        });

        const token = await Object.entries(res.user)[5][1].b;
        localStorage.setItem("auth-token", token);
        setToken(token);
      });
  }

  login(email, password, setToken) {
    this.auth.signInWithEmailAndPassword(email, password).then(async (res) => {
      const token = await Object.entries(res.user)[5][1].b;
      await localStorage.setItem("auth-token", token);

      setToken(window.localStorage.token);
    });
  }

  logout() {
    this.auth.signOut().then(async (res) => {
      await localStorage.removeItem("auth-token");
    });
  }

  async resetPassword(email) {
    await this.auth.sendPasswordResetEmail(email);
  }
}

const firebase = new Firebase();
export default firebase;
