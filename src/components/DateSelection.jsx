import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
//import api from '../api/axiosConfig';
import '../styles/dateSelection.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DaysOfTheMonth from './DaysOfTheMonth';

import dateSelectionData from '../data/dateSelectionData.json';

function DateSelection(props) {

  const {
    selectedYear,
    selectedMonth,
    setSelectedMonth,
    selectedDay,
    setSelectedDay,
    availableSlots,
    setAppointmentTimes } = props;

  // get the day of the week that the first day of the month starts on.
  // Date() uses 0-indexed months, so subtract 1
  // from the month to get the correct month
  const [firstDayOfWeek, setFirstDayOfWeek] = useState(new Date(selectedYear, selectedMonth - 1, selectedDay).getDay());

  // get the last day of the month
  const [lastDayOfMonth, setLastDayOfMonth] = useState(new Date(selectedYear, selectedMonth, 0).getDate());

  // Update the days in the month when a new month is selected
  const updateDaysInMonth = (month) => {
    setSelectedMonth(month);
    setSelectedDay(1);

    // Date() uses 0-indexed months, so subtract 1
    // from the month to get the correct month
    setFirstDayOfWeek(new Date(selectedYear, month - 1, 1).getDay());
    setLastDayOfMonth(new Date(selectedYear, month, 0).getDate());
  };

  // Filter the available slots to get the available times for the selected day
  useEffect(() => {
    const times = availableSlots?.filter(slot => {
      const dateSplit = slot.date?.split("-");
      return parseInt(dateSplit[0]) === selectedYear
        && parseInt(dateSplit[1]) === selectedMonth
        && parseInt(dateSplit[2]) === selectedDay;
    }).map(slot => slot.startTime);

    setAppointmentTimes(times);
  }, [selectedYear, selectedMonth, selectedDay, availableSlots, setAppointmentTimes]);

  return (
    <>
      <Card bg="light" text="dark" className="dateSelectionCard mt-2 py-0 h-100">
        <Card.Body>
          <Card.Title className="justify-content-between d-flex px-4 mb-3"><p className="m-0">Select a date</p><p className="m-0">2024</p></Card.Title>
            <Container>
            {Array.from({ length: 3 }).map((_, idx) => (
                <Row key={idx} className="justify-content-center">
                {Object.keys(dateSelectionData)
                    .slice(idx * 4, (idx + 1) * 4) // Divide data into chunks of 4
                    .map(key => (
                    <Col key={dateSelectionData[key].name} xs={3} className="mb-2 text-center">
                        <Button
                          variant="dark"
                          text="light"
                          className={selectedMonth === dateSelectionData[key].number ? "monthButton active" : "monthButton"}
                          onClick={() => updateDaysInMonth(dateSelectionData[key].number)} // Subtract 1 to get the correct month
                        >
                          {dateSelectionData[key].short}
                        </Button>
                    </Col>
                    ))}
                </Row>
            ))}
            </Container>
          <Row className="blankRow my-3"></Row>
          <Row className='m-auto justify-content-between daysOfTheWeek pb-1 px-5'>
              <Col xs={1} className="day text-center">S</Col>
              <Col xs={1} className="day text-center">M</Col>
              <Col xs={1} className="day text-center">T</Col>
              <Col xs={1} className="day text-center">W</Col>
              <Col xs={1} className="day text-center">T</Col>
              <Col xs={1} className="day text-center">F</Col>
              <Col xs={1} className="day text-center">S</Col>
          </Row>
          <DaysOfTheMonth
            selectedDay={selectedDay}
            firstDayOfWeek={firstDayOfWeek}
            lastDayOfMonth={lastDayOfMonth}
            setSelectedDay={setSelectedDay}
          />
        </Card.Body>
      </Card>
    </>
  );
}

DateSelection.propTypes = {
  selectedYear: PropTypes.number,
  selectedMonth: PropTypes.number,
  setSelectedMonth: PropTypes.func,
  selectedDay: PropTypes.number,
  setSelectedDay: PropTypes.func,
  availableSlots: PropTypes.array,
  setAppointmentTimes: PropTypes.func
};

export default DateSelection;
