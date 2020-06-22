import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';


const Landing = () => (
  <Container className="p-3">
    <Row>
      <Col>User Account: John Doe MD</Col>
      <Col>
        <Button>Cancel</Button>
        <Button>Save</Button>
      </Col>
    </Row>
    <hr></hr>
    <Row>
      <Col>Patient Name</Col>
      <Col>Mary, John</Col>
      <Col>Accession No:</Col>
      <Col>233-23423-234</Col>
    </Row>
    <Row>
      <Col>MRN</Col>
      <Col>123-567-8309</Col>
      <Col>Modality</Col>
      <Col>MRI Pelvis</Col>
    </Row>
    <Row>
      <Col>Study Date</Col>
      <Col>06/19/2020</Col>
      <Col>Reason for Study</Col>
      <Col>******</Col>
    </Row>

  </Container>
);

export default Landing;
