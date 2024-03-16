import { useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  // useEffect(() => {
  //   fetch(`http://localhost:9999/movie/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProduct(data);
  //     });
  // }, []);
  console.log(product);
  return (
    <Container>
      <Row>
        {" "}
        <h1>Movie Detail</h1>
      </Row>
      <Button href="/">
        {/* <Link to={"/"}>back</Link> */}
        back
      </Button>
      <Row>
        <h3>{product.title}</h3>
      </Row>
      <Row>{product.year}</Row>
      {/* <Row>{product.genre.name}</Row> */}
    </Container>
  );
};

export default Detail;
