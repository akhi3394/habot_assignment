import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { BsCheckCircle } from 'react-icons/bs';
import './BuyerSupplierSection.css';

const BuyerSupplierSection = () => {
  return (
    <>
    <Container className="buyer-supplier-section py-5">
      <Row className="align-items-center">
        <Col md={6}>
          <div className="video-wrapper">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Col>
        <Col md={6} className="text-center text-md-start">
          <h2>
            <span className="buyer-text">Buyer</span> <span className="supplier-text">Supplier</span>
          </h2>
          <ul className="list-unstyled">
            <li>
              <BsCheckCircle className="me-2 text-success" />
              Post your requirements.
            </li>
            <li>
              <BsCheckCircle className="me-2 text-success" />
              Sit back for multiple suppliers to contact you.
            </li>
            <li>
              <BsCheckCircle className="me-2 text-success" />
              Choose among the suppliers based on the ratings and reviews.
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
    <div className="banner my-4">
      <Container className='py-5'>
        <Row>
          <Col xs={12} md={6}>
            <div className="text">
              <h2>Let Suppliers Find You</h2>
              <p>Suppliers</p>
            </div>
          </Col>
          <Col xs={12} md={6}>
            <Button variant="warning" className="get-verified-btn">
              Get Verified
              <BsCheckCircle className="ml-2" />
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
};

export default BuyerSupplierSection;
