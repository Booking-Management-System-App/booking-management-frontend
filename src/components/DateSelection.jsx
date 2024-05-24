import { useState } from 'react';
//import api from '../api/axiosConfig';
import '../styles/dateSelection.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import dateSelectionData from '../data/dateSelectionData.json';

function DateSelection() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  // get the day of the week that the first day of the month starts on
  const firstDayOfWeek = new Date(today.getFullYear(), today.getMonth(), 1).getDay();

  // get the last day of the month
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();

  const [selectedMonth, setSelectedMonth] = useState(month);
  const [selectedDay, setSelectedDay] = useState(day);

  return (
    <>
      <Card bg="light" text="dark" className="dateSelectionCard mt-2 py-0">
        <Card.Body>
          <Card.Title className="justify-content-between d-flex px-4"><p>Select a date</p><p>2024</p></Card.Title>
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
                          onClick={() => setSelectedMonth(dateSelectionData[key].number)}
                        >
                          {dateSelectionData[key].short}
                        </Button>
                    </Col>
                    ))}
                </Row>
            ))}
            </Container>
          <Row className="blankRow my-3"></Row>
          <Row className='m-auto justify-content-between daysOfTheWeek pb-3 px-5'>
              <Col xs={1} className="day text-center">S</Col>
              <Col xs={1} className="day text-center">M</Col>
              <Col xs={1} className="day text-center">T</Col>
              <Col xs={1} className="day text-center">W</Col>
              <Col xs={1} className="day text-center">T</Col>
              <Col xs={1} className="day text-center">F</Col>
              <Col xs={1} className="day text-center">S</Col>
          </Row>
          {Array.from({ length: 6 }).map((_, idx) => (
              <Row key={idx} className="m-auto justify-content-between px-5 py-2 daysOfMonthRow">
              {Array.from({ length: 7 }).map((_, idy) => (
                  <Col key={(idx * 7) + idy + 1 - firstDayOfWeek} xs={1} className="p-0 text-center">
                    <Button
                      variant="dark"
                      text="light"
                      className={
                        (idx * 7) + idy + 1 - firstDayOfWeek > 0 &&
                        (idx * 7) + idy + 1 - firstDayOfWeek <= lastDayOfMonth
                        ? (
                          selectedDay === (idx * 7) + idy + 1 - firstDayOfWeek
                          ? (
                            "my-2 dayButton active"
                          ) : (
                            "my-2 dayButton"
                          )
                        ) : (
                          "my-2 dayButton d-none"
                        )
                      }
                      onClick={() => setSelectedDay((idx * 7) + idy + 1 - firstDayOfWeek)}
                    >
                      {(idx * 7) + idy + 1 - firstDayOfWeek}
                    </Button>
                  </Col>
              ))}
              </Row>
          ))}
        </Card.Body>
      </Card>
    </>
  );
}

export default DateSelection;
