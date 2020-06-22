import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Landing = () => (
  <Container className="p-3">
    <Row>
      <Col>User Account: John Doe MD</Col>
      <Col>
        <Button>Cancel</Button>
        <Button>Save</Button>
      </Col>
      <Col>
      <a href="cases">Back to List of Cases</a>
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
    <br></br>
    <Row>
      <Col>Orders</Col>
    </Row>
    <hr></hr>
    <Row>
      <Col>Descriptors</Col>
      <Col>add hashtags, separated by a comma e.g. #neuro, #glioma, #rare</Col>
    </Row>
    <Row>
      <Col>Follow up</Col>
    </Row>
    <Form>
      <div key={`inline-checkbox`} className="mb-3">
        <Form.Check inline label="3 Days" type="checkbox" id={`inline-checkbox-1`} />
        <Form.Check inline label="7 Days" type="checkbox" id={`inline-checkbox-2`} />
        <Form.Check inline label="14 Days" type="checkbox" id={`inline-checkbox-3`} />
        <Form.Check inline label="1 Month" type="checkbox" id={`inline-checkbox-4`} checked/>
        <Form.Check inline label="6 Months" type="checkbox" id={`inline-checkbox-5`} />
        <Form.Check inline label="1 Year" type="checkbox" id={`inline-checkbox-6`} />
        <Form.Check inline label="Custom Date" type="checkbox" id={'inline-checkbox-7'} />
        <Form.Control inline label="Custom Date Text" type="date" id={'inline-custom-date-1'} />
      </div>
    </Form>
  </Container>
);

export default Landing;
