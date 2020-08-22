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
          roles: "user",
          phone: phone,
          favorites: [],
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
        } else {
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  }

  async getEditAd(collection, id, setState, setPictures, setCurrentValues) {
    const docRef = this.db.collection(collection).doc(id);

    docRef
      .get()
      .then(function (doc) {
        if (doc.exists) {
          const data = doc.data();
          setState(data);
          setPictures(data.imageUrls);
          setCurrentValues(data);
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  }

  async updateDoc(collection, id, data) {
    await this.db
      .collection(collection)
      .doc(id)
      .update({ ...data });
  }

  async getUserById(id) {
    const data = await this.db.collection("users").where("uid", "==", id).get();

    const users = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    return users[0];
  }

  async getCollectionDocs(collection, setState) {
    const data = await this.db.collection(collection).get();

    setState(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  }

  async getMyAds(id, setState) {
    await this.db
      .collection("ads")
      .where("creatorId", "==", id)
      .onSnapshot((snapshot) => {
        const docs = snapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setState(docs);
      });
  }

  async deleteDoc(collection, id) {
    await this.db.collection(collection).doc(id).delete();
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
