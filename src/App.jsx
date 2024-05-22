//import { useState, useEffect } from 'react';
import './App.css';
//import api from './api/axiosConfig';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import DateSelection from './components/DateSelection';
import TimeSelection from './components/TimeSelection';
import ConfirmAppointmentCard from './components/ConfirmAppointmentCard';

function App() {

  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={6}>
            <DateSelection />
          </Col>
          <Col xs={6}>
            <Row className="h-50">
              <TimeSelection />
            </Row>
            <Row className="h-50">
              <ConfirmAppointmentCard />
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App;
