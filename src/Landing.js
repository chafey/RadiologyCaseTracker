import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';


const Landing = () => (
  <Container className="p-3">
    <Row>
      <Col>User Account: John Doe MD</Col>
      <Col>
        <Button>Cancel</Button>
        <Button>Save</Button>
      </Col>
      <Col>
        <Link to="/cases">Back to List of Cases</Link>
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
      <Col>DOB</Col>
      <Col>06/22/1974</Col>
      <Col>Reason for Study</Col>
      <Col>Dyspareunia x 2 years</Col>
    </Row>
    <Row>
      <Col>Study Date</Col>
      <Col>06/19/2020</Col>
      <Col></Col>
      <Col></Col>
    </Row>
  
    <br></br>
    <Row>
      <Col>Orders</Col>
    </Row>
    <hr></hr>
    <Row>
      <Col>Descriptor: add hashtags, separated by a comma</Col>
      <Col><Tags /></Col>
    </Row>
    <Row>
      <Col>Follow up:</Col>
    </Row>
    <Row>
      <Form>
        <div key={`inline-checkbox`} className="mb-3">
          <Form.Check inline label="3 Days" type="checkbox" id={`inline-checkbox-1`} />
          <Form.Check inline label="7 Days" type="checkbox" id={`inline-checkbox-2`} />
          <Form.Check inline label="14 Days" type="checkbox" id={`inline-checkbox-3`} />
          <Form.Check inline label="1 Month" type="checkbox" id={`inline-checkbox-4`} />
          <Form.Check inline label="6 Months" type="checkbox" id={`inline-checkbox-5`} />
          <Form.Check inline label="1 Year" type="checkbox" id={`inline-checkbox-6`} />
          <Form.Check inline label="Custom Date" type="checkbox" id={'inline-checkbox-7'} />
          <Form.Control inline label="Custom Date Text" type="date" id={'inline-custom-date-1'} />
        </div>
      </Form>
    </Row>
    <Row>
      <Col><Form.Check inline label="Pending Outside Imaging" type="checkbox" id={'inline-checkbox-outside-img'} /></Col>
      <Col><Form.Check inline label="For review at Tumor Board" type="checkbox" id={'inline-checkbox-tumor-board'} /></Col>
      <Col><Search /></Col>
    </Row>
  </Container>
);

const Search = () => {
  const [showResults, setShowResults] = React.useState(false)
  const onClick = () => setShowResults(true)
  return (
    <div>
      <input type="submit" value="Pending Scheduled Procedure" onClick={onClick} />
      { showResults ? <Results /> : null }
    </div>
  )
}

const Results = () => (
  <div id="results" className="search-results">
    <Row>
      <Col>Visit</Col><Col>Physician</Col><Col>Location</Col><Col>link</Col>
    </Row>
    <Row>
            <Col>7/1/2020</Col><Col>Dr.Pepper</Col><Col>Amb. Surgery</Col><Col><Form.Check inline label="Link visit" type="checkbox" id={'inline-op-visit-1'} /></Col>
    </Row>
    <Row>  
      <Col>8/5/2020</Col><Col>Dr.Seldinger</Col><Col>Interventional Radiology</Col><Col><Form.Check inline label="Link visit" type="checkbox" id={'inline-op-visit-2'} /></Col></Row>
    <Row>
      <Col>8/20/2020</Col><Col>Dr.Gupta</Col><Col>Outpatient</Col><Col><Form.Check inline label="Link visit" type="checkbox" id={'inline-op-visit-3'} /></Col>
    </Row>
  </div>
)


const ListItem = ({ value, onClick }) => (
  <li onClick={onClick}>{value}</li>
);

const List = ({ items, onItemClick }) => (
  <ul>
    {
      items.map((item, i) => <ListItem key={i} value={item} onClick={onItemClick} />)
    }
  </ul>
);

class Tags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      tags: ['#neuro', '#glioma', '#rare']
    };
  }

  onClick = () => {
    const { inputValue, tags: tags } = this.state;
    if (inputValue) {
      const nextState = [...tags, inputValue];
      this.setState({ tags: nextState, inputValue: '' });
    }
  }

  onChange = (e) => this.setState({ inputValue: e.target.value });

  handleItemClick = (e) => {
    //console.log(e.target.innerHTML);
    // do nothing
    //this.tags.forEach(item,key) =>{console.log("nothing");}
  }

  render() {
    const { tags: tags, inputValue } = this.state;
    return (
      <div>
        <input type="text" value={inputValue} onChange={this.onChange} />
        <button onClick={this.onClick}>Add</button>
        <List items={tags} onItemClick={this.handleItemClick} />
      </div>
    );
  }
}


export default Landing;
