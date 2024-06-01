import { useState } from 'react';
import '../App.css';
//import api from './api/axiosConfig';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import NavigationBar from '../components/NavigationBar';
import DateSelection from '../components/DateSelection';
import TimeSelection from '../components/TimeSelection';
import ConfirmAppointmentCard from '../components/ConfirmAppointmentCard';
import Footer from '../components/Footer';

function BookAppointmentsPage() {

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
        <NavigationBar />
        <Row className="mh-100">
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
      <Footer />
    </>
  )
}

export default BookAppointmentsPage;
