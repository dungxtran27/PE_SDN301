import { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  Row,
} from "react-bootstrap";

const Add = () => {
  //   const handleFormSubmit = async (e) => {
  //     e.preventDefault();
  //     try {
  //       const response = await fetch("http://localhost:9999/movie/create", {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${token}`,
  //         },
  //         body: JSON.stringify({ title: title, year: year, genre: genre }),
  //       });

  //       if (response.ok) {
  //         const data = await response.json();
  //         alert("ok on roi");

  //         // Additional logic to handle successful login, such as setting user session
  //       }
  //     } catch (error) {
  //       alert("An error occurred wtf:", error);
  //       // Additional error handling logic
  //     }
  //   };
  return (
    <Container>
      <h1>ADD</h1>
      <Row>
        <Col>
          <Form
          //    onSubmit={handleFormSubmit}
          >
            <Form.Group className="mb-3">
              <Form.Label>title </Form.Label>
              <Form.Control
                controlId="title"
                // onChange={(e) => {
                //   setTitle(e.target.value);
                // }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>year</Form.Label>
              <Form.Control
                controlId="year"
                type="number"
                // onChange={(e) => {
                //   setYear(e.target.value);
                // }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Genre</Form.Label>
              <Form.Select
                controlId="genre"
                // onChange={(e) => {
                //   setGenre(e.target.value);
                // }}
              >
                {/* {categories.map((c) => (
                  <option key={c._id} value={c._id}>
                    {c.name}
                  </option>
                ))} */}
              </Form.Select>
            </Form.Group>

            <Button variant="primary" type="submit">
              Create
            </Button>
            <Button variant="danger" href="/">
              cancel{" "}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Add;
