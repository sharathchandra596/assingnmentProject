import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './components/CustomNavbar';
import { Container } from 'react-bootstrap';
import Home from './components/home/Homs';
import Features from './components/features/Features';
import Products from './components/products/Product';
import Testimonials from './components/testimonial/Testimonial';
import ContactUs from './components/contactus/ContactUs';


function App() {


  return (
    <>
      <CustomNavbar/>
      <Container className="mt-5">
        <Home />
        <Features/>
        <Products/>
        <ContactUs/>
      </Container>
    </>
  )
}

export default App
