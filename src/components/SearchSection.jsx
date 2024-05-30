import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const SearchSection = () => {
  return (
    <div className="search-section text-center text-white" style={{ backgroundImage: 'url(/src/assets/dubai.jpg)', backgroundSize: 'cover' }}>
      <Container>
        <h1 className='fw-bold'>Are You a Supplier?</h1>
        <h1>Explore Matching Opportunities.</h1>
        <Form className="d-flex justify-content-center">
          <Form.Control type="text" placeholder="Search your required service here" className="me-2" />
          <Form.Control type="text" placeholder="Search your desired location here" className="me-2" />
          <Button variant="success">Search</Button>
        </Form>
        <p className="mt-3">
          <span className='fw-bold'>Are you a buyer?</span> <a href="#" className="text-white">Click here if you are looking to post a requirements</a>
        </p>
      </Container>
    </div>
  );
};

export default SearchSection;
