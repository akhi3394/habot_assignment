import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Footer.css';
import logo from '/src/assets/habot-logo.png';


const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row>
          <Col md={3} className="footer-logo mb-3">
            <img src={logo} alt="Habot Logo" style={{width:'100px',height:'100px'}} />
            <p>© R Singhania</p>
          </Col>
          <Col md={3} className="mb-3">
            <h5>Company</h5>
            <ul className="list-unstyled">
              <li>About</li>
              <li>FAQ</li>
            </ul>
          </Col>
          <Col md={3} className="mb-3">
            <h5>Terms</h5>
            <ul className="list-unstyled">
              <li>Data privacy</li>
              <li>Terms</li>
              <li>Accessibility</li>
            </ul>
          </Col>
          <Col md={3} className="mb-3">
            <h5>Related</h5>
            <ul className="list-unstyled">
              <li>Find Buyer</li>
              <li>Feedback</li>
            </ul>
            <div className="social-icons">
              <FaLinkedin />
              <FaTwitter />
              <FaFacebook />
              <FaInstagram />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
