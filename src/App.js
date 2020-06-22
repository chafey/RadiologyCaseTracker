import React, { useState } from 'react';

import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

import './App.css';

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">React-Bootstrap</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};

const App = () => (
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
      <Form.Check inline label="14 Days" type="checkbox" id={`inline-checkbox-2`} />
      <Form.Check inline label="1 Month" type="checkbox" id={`inline-checkbox-2`} />
      <Form.Check inline label="6 Months" type="checkbox" id={`inline-checkbox-2`} />
      <Form.Check inline label="1 Year" type="checkbox" id={`inline-checkbox-2`} />
    </div>
  </Form>
  </Container>
);

export default App;
