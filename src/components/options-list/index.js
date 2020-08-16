import React, { useContext, useState, useEffect } from "react";
import { FirebaseContext } from "../../firebase";

const OptionsList = () => {
  const { firebase } = useContext(FirebaseContext);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    async function getOptions() {
      // const data = await firebase.db.collection("options").get();
      // const optionsDb = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      // setOptions(optionsDb);
      return firebase.db
        .collection("options")
        .orderBy("name")
        .onSnapshot(handleSnapshot);
    }

    async function handleSnapshot(snapshot) {
      const options = await snapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setOptions(options);
    }

    getOptions();
  }, [firebase]);

  return (
    <ul>
      {options.map((b, id) => (
        <li key={b.id}>{b.name}</li>
      ))}
    </ul>
  );
};

export default OptionsList;
