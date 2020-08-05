import React from "react";

import { Button, Form } from "react-bootstrap";

const OptionAdd = () => {
  return (
    <Form>
      <Form.Group>
        <Form.Control
          name="option-name"
          type="text"
          placeholder="Option Name"
        />
      </Form.Group>
      <Button type="submit">Add</Button>
    </Form>
  );
};

export default OptionAdd;
