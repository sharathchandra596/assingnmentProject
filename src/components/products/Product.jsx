// src/pages/Products.js

import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import "./product.css"// Import custom CSS
import img3 from '../../assets/img3.svg'

const Products = () => {
  return (
    <>
      <h2 className="text-center mb-4">Our Products</h2>
    <Container className="d-flex products-container mt-5 ">
      <Row>
        <Col md={4}>
          <Card className="product-card">
            <Card.Img variant="top" src={img3} />
            <Card.Body>
              <Card.Title>Product 1</Card.Title>
              <Card.Text>
                This is a short description of the product.
              </Card.Text>
              <Button variant="primary">Buy Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="product-card">
            <Card.Img variant="top" src={img3} />
            <Card.Body>
              <Card.Title>Product 2</Card.Title>
              <Card.Text>
                This is a short description of the product.
              </Card.Text>
              <Button variant="primary">Buy Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="product-card">
            <Card.Img variant="top" src={img3} />
            <Card.Body>
              <Card.Title>Product 3</Card.Title>
              <Card.Text>
                This is a short description of the product.
              </Card.Text>
              <Button variant="primary">Buy Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default Products;
