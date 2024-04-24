//import { useState, useEffect } from 'react';
import './App.css';
//import api from './api/axiosConfig';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import DateSelection from './components/DateSelection';

function App() {

  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={6}>
            <DateSelection />
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App;
