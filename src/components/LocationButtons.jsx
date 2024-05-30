import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { BsArrowRight } from 'react-icons/bs';
import './LocationButtons.css'  

// const locations = ['Abu Dhabi', 'Dubai', 'Sharjah & Ajman', 'Fujairah', 'Ras Al Khaimah', 'Umm Al Quwain'];

const LocationButtons = () => {
  return (
    <Container className="py-5">
    <Row>
      <Col md={6} className="mb-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ready to dive into HABOT?
        </motion.h2>
        <p>
          Signing up with HABOT opens the door to a world of new opportunities
          and potential for business growth. Gain access to a vibrant community
          of like-minded individuals, unlock valuable resources, and take the
          first step towards realizing your entrepreneurial dreams.
        </p>
      </Col>
      <Col md={6}>
        <Row>
          <Col xs={6} className="mb-3">
            <Button variant="outline-primary" block>
              <div className="city-card">Abu Dhabi</div>
            </Button>
          </Col>
          <Col xs={6} className="mb-3">
            <Button variant="outline-primary" block>
              <div className="city-card">Dubai</div>
            </Button>
          </Col>
          <Col xs={6} className="mb-3">
            <Button variant="outline-primary" block>
              <div className="city-card">Sharjah & Ajman</div>
            </Button>
          </Col>
          <Col xs={6} className="mb-3">
            <Button variant="outline-primary" block>
              <div className="city-card">Fujairah</div>
            </Button>
          </Col>
          <Col xs={6} className="mb-3">
            <Button variant="outline-primary" block>
              <div className="city-card">Ras Al Khaimah</div>
            </Button>
          </Col>
          <Col xs={6} className="mb-3">
            <Button variant="outline-primary" block>
              <div className="city-card">Umm Al Quwain</div>
            </Button>
          </Col>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col>
        <Button variant="success" style={{width:'300px'}}>
          Sign up Today! <BsArrowRight />
        </Button>
      </Col>
    </Row>
  </Container>
  );
};

export default LocationButtons;
