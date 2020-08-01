import React, { useState } from "react";

import { Tab, Tabs } from "react-bootstrap";

import styles from "./index.module.css";

const Dashboard = (props) => {
  const [key, setKey] = useState("home");

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      defaultActiveKey={key}
    >
      <Tab eventKey="1" title="New Ad" tabClassName={styles["color-orangered"]}>
        <h1>New Ad</h1>
      </Tab>
      <Tab eventKey="2" title="My Ads" tabClassName={styles["color-orangered"]}>
        <h1>My Ads</h1>
      </Tab>
      <Tab
        eventKey="3"
        title="Favorites"
        tabClassName={styles["color-orangered"]}
      >
        <h1>favorites</h1>
      </Tab>
    </Tabs>
  );
};

export default Dashboard;
