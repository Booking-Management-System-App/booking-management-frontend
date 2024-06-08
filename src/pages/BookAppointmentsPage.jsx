import { useState, useEffect } from 'react';
import '../App.css';
import '../styles/bookAppointmentsPage.css';
import api from '../api/axiosConfig';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';

import FirstAppointmentModal from '../components/FirstAppointmentModal';
import NavigationBar from '../components/NavigationBar';
import DateSelection from '../components/DateSelection';
import TimeSelection from '../components/TimeSelection';
import ConfirmAppointmentCard from '../components/ConfirmAppointmentCard';
import Footer from '../components/Footer';

function BookAppointmentsPage() {

  const [availableSlots, setAvailableSlots] = useState([{}]);

  const [appointmentTimes, setAppointmentTimes] = useState([]);

  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  // Get the available appointment times from the server
  useEffect(() => {
    api.get('/available-slots')
      .then(res => {
        setAvailableSlots(res.data);

        // Get the first available day, month, and time
        const dateSplit = res.data[0].date.split("-");
        setSelectedYear(parseInt(dateSplit[0]));
        setSelectedMonth(parseInt(dateSplit[1]) + 1);
        setSelectedDay(parseInt(dateSplit[2]));
        setSelectedTime(res.data[0].startTime);

        // Get the available appointment times
        const times = [];
        res.data.forEach(slot => {
          if (!times.includes(slot.startTime)) {
            times.push(slot.startTime);
          }
        });
        setAppointmentTimes(times);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {selectedTime === "" ? (
        <Spinner animation="border" variant="light" role="status" className="loadingSpinner" />
        ) : (
        <>
          <FirstAppointmentModal selectedTime={selectedTime} />
          <Container fluid className="app-container">
            <NavigationBar />
            <Row className="mh-100">
              <Col xs={6} className="d-flex flex-column">
                <DateSelection
                  year={selectedYear}
                  month={selectedMonth}
                  day={selectedDay}
                  availableSlots={availableSlots}
                  setAppointmentTimes={setAppointmentTimes}
                />
              </Col>
              <Col xs={6} className="d-flex flex-column pe-4 justify-content-between">
                <Row className="timeSelectionRow h-50">
                  <TimeSelection
                    selectedTime={selectedTime}
                    setSelectedTime={setSelectedTime}
                    appointmentTimes={appointmentTimes}
                  />
                </Row>
                <Row className="confirmAppointmentRow">
                  <ConfirmAppointmentCard selectedTime={selectedTime}/>
                </Row>
              </Col>
            </Row>
          </Container>
          <Footer />
        </>
      )}
    </>
  )
}

export default BookAppointmentsPage;
