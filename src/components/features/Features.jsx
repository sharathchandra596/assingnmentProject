// src/pages/Features.js

import { Container, Row, Col } from 'react-bootstrap';
import './features.css'; // Import custom CSS
import img2 from '../../assets/img2.svg';

const Features = () => {
  return (
    <Container className="features-container mt-5">
      <Row className="align-items-center">
        <Col md={6}>
          <img src={img2} alt="Placeholder" className="img-fluid features-image" />
        </Col>
        <Col md={6}>
          <h4>Amazing Features</h4>
          <p>Our website offers a variety of amazing features that you will love. From seamless navigation to stunning visuals, we've got it all covered.</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Features;
