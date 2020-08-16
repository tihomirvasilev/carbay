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

  async getDoc(collection, id, setState) {
    const docRef = this.db.collection(collection).doc(id);

    docRef
      .get()
      .then(function (doc) {
        if (doc.exists) {
          setState(doc.data());
          console.log("Document data:", doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  }

  async getCollectionDocs(collection, setState) {
    const data = await this.db.collection(collection).get();

    setState(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }

  async getCollectionSnapshotDocs(collection, setState) {
    firebase.db
      .collection(collection)
      .orderBy("name")
      .onSnapshot(async (snapshot) => {
        const docs = await snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setState(docs);
      });
  }
}

const firebase = new Firebase();
export default firebase;
