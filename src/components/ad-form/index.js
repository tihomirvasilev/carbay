import React from "react";
import { Form, Col, Button } from "react-bootstrap";

const AdForm = () => {
  return (
    <Form>
      <Form.Row>
        <Form.Group as={Col} sm={3} controlId="brand">
          <Form.Label>Brand</Form.Label>
          <Form.Control as="select">
            <option>Select Brand</option>
            <option>Ford</option>
            <option>BMW</option>
            <option>Audi</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} sm={3} controlId="model">
          <Form.Label>Model</Form.Label>
          <Form.Control as="select">
            <option selected={false}>Select Model</option>
            <option>Focus</option>
            <option>Mondeo</option>
            <option>Fiesta</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="modification">
          <Form.Label>Modification</Form.Label>
          <Form.Control placeholder="Modification" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} sm={3} controlId="category">
          <Form.Label>Category</Form.Label>
          <Form.Control as="select">
            <option>Select Category</option>
            <option>Estate</option>
            <option>Hatchback</option>
            <option>Coupe</option>
            <option>Van</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} sm={3} controlId="first-registration">
          <Form.Label>First Registration</Form.Label>
          <Form.Control as="select">
            <option selected={false}>Select Year</option>
            <option>2000</option>
            <option>2001</option>
            <option>2002</option>
          </Form.Control>
        </Form.Group>
        <Form.Group as={Col} sm={3} controlId="milage">
          <Form.Label>Milage</Form.Label>
          <Form.Control placeholder="Enter Milage" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} sm={2} controlId="engine">
          <Form.Label>Engine</Form.Label>
          <Form.Control as="select">
            <option>Select Engine</option>
            <option>Petrol</option>
            <option>Diesel</option>
            <option>LPG</option>
            <option>SNG</option>
          </Form.Control>
        </Form.Group>

        <Form.Group as={Col} sm={2} controlId="transmission">
          <Form.Label>Transmission</Form.Label>
          <Form.Control as="select">
            <option>Select Transmission</option>
            <option>Manual</option>
            <option>Automatic</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} sm={2} controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control placeholder="Enter Price" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} sm={6} controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows="4" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} sm={3} controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control placeholder="Enter City" />
        </Form.Group>
        <Form.Group as={Col} sm={3} controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control placeholder="Enter Address" />
        </Form.Group>
      </Form.Row>
      <Button variant="primary" type="submit">
        Add
      </Button>
    </Form>
  );
};

export default AdForm;
