import React from "react";

import { Button, Form } from "react-bootstrap";

const ModelAdd = () => {
  return (
    <Form>
      <Form.Group>
        <Form.Control name="model-name" type="text" placeholder="Model Name" />
      </Form.Group>
      <Button type="submit">Add</Button>
    </Form>
  );
};

export default ModelAdd;
