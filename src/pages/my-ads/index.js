import React, { useContext, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Layout from "../../components/layout";
import AdsList from "../../components/ads-list";
import { FirebaseContext } from "../../firebase";
import styles from "./index.module.css";

const MyAdsPage = () => {
  const { firebase } = useContext(FirebaseContext);
  const [ads, setAds] = useState([]);

  useEffect(() => {
    firebase.getCollectionDocs("ads", setAds);
  }, [firebase]);

  return (
    <Layout>
      <Container className={styles.body}>
        <AdsList ads={ads} />
      </Container>
    </Layout>
  );
};

export default MyAdsPage;
