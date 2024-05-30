import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BsFillPersonFill, BsFillFileEarmarkTextFill, BsCheckCircleFill, BsPencilFill, BsFillFileTextFill, BsFillHandThumbsUpFill } from 'react-icons/bs';
import './HowItWorksSection.css';

const HowItWorksSection = () => {
  const steps = [
    { icon: BsFillPersonFill, text: 'Select Your Role and Sign Up' },
    { icon: BsFillFileEarmarkTextFill, text: 'Buyers Post Your Requirements' },
    { icon: BsCheckCircleFill, text: 'Review, Select, and Contact the Best Suppliers' },
    { icon: BsPencilFill, text: 'Suppliers Complete your profile and get notified for opportunities' },
    { icon: BsFillFileTextFill, text: 'Contact to Buyers and Share your Quote for the service' },
    { icon: BsFillHandThumbsUpFill, text: 'Both the Parties can Connect and Make Business Leave a Feedback' }
  ];

  return (
    <Container className="how-it-works-section py-5">
      <h2 className="text-center">How it works?</h2>
      <p className="text-center">
        Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with potential buyers, 
        and build successful business relationships, sharing valuable feedback.
      </p>
      <Row className="text-center">
        {steps.map((step, index) => (
          <Col key={index} md={4} className="mb-4">
            <div className="how-it-works-step p-3 h-100">
              <step.icon size={40} className="mb-3" />
              <p>{step.text}</p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HowItWorksSection;
