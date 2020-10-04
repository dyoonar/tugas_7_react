import React from 'react';
import { Container,Row, Col } from 'react-bootstrap';
import PageAlert from './component/PageAlert';
import PageBadge from './component/PageBadge';
import PageBC from './component/PageBC';
import PageCard from './component/PageCard';

function App() {
  return (
    <div>
      <Container fluid>
        <Row>
          <Col><PageAlert /></Col>
          <Col></Col>          
          <Col><PageBadge/> </Col>
        </Row>
        <Row>
          <Col></Col>
          <Col></Col><Col></Col>          
          <Col><PageBC/> </Col>
        </Row>
      </Container> 
      <br /><PageCard />
    </div>
  );
}

export default App;
