// src/pages/Home.js

import { Container, Row, Col, Button } from 'react-bootstrap';
import './home.css'; // Import custom CSS
import img1 from '../../assets/img1.svg';

const Home = () => {
  return (
    <Container className="home-container mt-5">
      <Row className="align-items-center">
        <Col md={6}>
          <h2 >WE MAKE YOUR IDEA'S <span>INTO REALITY</span> </h2>
          <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <Button variant="primary" className="me-2">get started</Button>
          <Button variant="secondary">Contact Us</Button>
        </Col>
        <Col md={6}>
          <img src={img1} alt="Placeholder" className="img-fluid home-image" />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
