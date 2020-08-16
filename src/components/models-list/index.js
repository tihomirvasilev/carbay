import React, { useContext, useState, useEffect } from "react";

import { FirebaseContext } from "../../firebase";

const ModelsList = (props) => {
  const { firebase } = useContext(FirebaseContext);
  const [models, setModels] = useState(null);

  useEffect(() => {
    function getModels() {
      if (props.brandId === "") {
        return;
      }
      const modelsDb = firebase.db
        .collection("brands")
        .doc(props.brandId)
        .get()
        .then((doc) => {
          console.log(doc.data().models);
        });

      setModels(modelsDb);
    }

    getModels();
  }, [firebase, models, props.brandId]);

  return (
    <div>
      <h4>model 1</h4>
      <h4>model 2</h4>
      <h4>model 3</h4>
      <h4>model 4</h4>
      <h4>model 5</h4>
      <h4>model 6</h4>
    </div>
  );
};

export default ModelsList;
