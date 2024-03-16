import React, { useEffect, useState } from "react";
import { Button, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
const List = () => {
  return (
    <div className="container">
      <h1>Product List</h1>
      <button className="btn btn-warning">
        <Link to={"/add"} style={{ textDecoration: "none" }}>
          add movie
        </Link>
      </button>
      <Row>
        <Form
        // onSubmit={find}
        >
          <Form.Control
            type="text"
            placeholder="search movie"
            // onChange={(e) => {
            //   setSearch(e.target.value);
            // }}
          />
          <Button type="submit ">find</Button>
        </Form>
      </Row>
      <div className="row">
        <div className="col-12">
          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr>
                <th>id</th>
                <th>title</th>
                <th>year</th>
                <th>genre</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {/* {products.map((product) => (
                <tr key={product._id}>
                  
                  <td>{product._id}</td>
                  <td>
                    <a href={`/movie/${product._id}`}>{product.title}</a>
                  </td>
                  <td>{product.year}</td>
                  <td>{product.genre.name}</td>
                  <td>
                    <Button
                      onClick={(e) => {
                        handleEdit(product._id);
                      }}
                    >
                      edit
                    </Button>
                  </td>
                </tr>
              ))} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default List;
