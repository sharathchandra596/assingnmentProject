// src/pages/ContactUs.js

import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './contactUs.css'; // Import custom CSS
import img4 from '../../assets/img4.svg';

const ContactUs = () => {
  return (
    <Container className="contactus-container mt-5">
      <Row className="align-items-center">
        <Col md={6}>
          <img src={img4} alt="Contact Us" className="img-fluid contactus-image" />
        </Col>
        <Col md={6}>
          <h2>Contact Us</h2>
          <Form className="contactus-form">
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
