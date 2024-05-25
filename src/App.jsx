import { useState } from 'react';
import './App.css';
//import api from './api/axiosConfig';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import DateSelection from './components/DateSelection';
import TimeSelection from './components/TimeSelection';
import ConfirmAppointmentCard from './components/ConfirmAppointmentCard';

function App() {

  const times = [
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
  ];

  const [selectedTime, setSelectedTime] = useState(times[0]);

  return (
    <>
      <Container fluid className="app-container">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Row className="mh-100 mt-2">
          <Col xs={6} className="d-flex flex-column">
            <DateSelection />
          </Col>
          <Col xs={6} className="d-flex flex-column pe-4 justify-content-between">
            <Row className="timeSelectionRow h-50">
              <TimeSelection selectedTime={selectedTime} setSelectedTime={setSelectedTime} times={times} />
            </Row>
            <Row className="confirmAppointmentRow">
              <ConfirmAppointmentCard selectedTime={selectedTime}/>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default App;
