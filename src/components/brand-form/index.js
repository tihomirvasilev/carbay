import React, { useContext } from "react";

import { Button, Form } from "react-bootstrap";

const Brands = () => {
  return (
    <Form>
      <Form.Group>
        <Form.Control name="brand-name" type="text" placeholder="Brand Name" />
      </Form.Group>
      <Button type="submit">Add</Button>
    </Form>
  );
};

export default Brands;
