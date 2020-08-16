import React, { useContext, useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import FirebaseContext from "../../firebase/context";
import validateOption from "../../pages/admin-options/validateOption";
import FormValidation from "../../utils/from-validation";
import AdminPanelNav from "../../components/admin-nav";
import Layout from "../../components/layout";
import OptionsList from "../../components/options-list";
import Title from "../../components/title";

const INITIAL_STATE = {
  name: "",
};

const OptionsPage = (props) => {
  const { firebase, user } = useContext(FirebaseContext);
  const { handleSubmit, handleChange, values, errors } = FormValidation(
    INITIAL_STATE,
    validateOption,
    handleCreateOption
  );
  const [options, setOptions] = useState([]);

  useEffect(() => {
    firebase.getCollectionSnapshotDocs("options", setOptions);
  }, [firebase]);

  function handleCreateOption() {
    const hasErrors = Object.keys(errors).length > 0;
    if (!user) {
      props.history.push("/login");
    } else {
      if (!hasErrors) {
        const { name } = values;
        const newOption = {
          name,
        };
        firebase.db.collection("options").add(newOption);
        props.history.push("/admin/options");
      }
    }
  }

  return (
    <Layout>
      <Container>
        <Title title={"Admin Panel"} />
        <AdminPanelNav>
          <Row>
            <Col sm={2} />
            <Col sm={5}>
              <Form onSubmit={handleSubmit}>
                <Form.Group>
                  <Form.Control
                    onChange={handleChange}
                    name="name"
                    type="text"
                    placeholder="Option Name"
                    value={values.name}
                  />
                </Form.Group>
                <Button type="submit">Add</Button>
              </Form>
              <br />
              <OptionsList options={options} />
            </Col>
          </Row>
        </AdminPanelNav>
      </Container>
    </Layout>
  );
};

export default withRouter(OptionsPage);
