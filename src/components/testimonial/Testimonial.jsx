// src/pages/Testimonials.js

import { Container, Carousel } from 'react-bootstrap';
import './testimonial.css'; // Import custom CSS

const Testimonials = () => {
  return (
    <Container className="testimonials-container mt-5">
      <h2 className="text-center mb-4">What Our Customers Say</h2>
      <Carousel>
        <Carousel.Item>
          <p className="testimonial-text">
            This is the best service I have ever used. The team is fantastic, and the results speak for themselves!
          </p>
          <Carousel.Caption>
            <h5>John Doe</h5>
            <p>CEO, Company Name</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <p className="testimonial-text">
            I highly recommend this to anyone looking for quality and reliability. The support was excellent.
          </p>
          <Carousel.Caption>
            <h5>Jane Smith</h5>
            <p>Marketing Director, Another Company</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <p className="testimonial-text">
            A truly exceptional experience from start to finish. They exceeded all my expectations.
          </p>
          <Carousel.Caption>
            <h5>Emily Johnson</h5>
            <p>Freelancer</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Testimonials;
