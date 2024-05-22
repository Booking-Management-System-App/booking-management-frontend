//import { useState, useEffect } from 'react';
//import api from '../api/axiosConfig';
import '../styles/dateSelection.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { getDay } from "date-fns";
import Card from 'react-bootstrap/Card';

import dateSelectionData from '../data/dateSelectionData.json';

function DateSelection() {
  const today = new Date();
  const day = getDay(today);

  return (
    <>
      <Card bg="light" text="dark" className="dateSelectionCard mt-2">
        <Card.Body>
          <Card.Title className="justify-content-between d-flex px-4"><p>Select a date</p><p>2024</p></Card.Title>
            <Container>
            {Array.from({ length: 3 }).map((_, idx) => (
                <Row key={idx} className="justify-content-center">
                {Object.keys(dateSelectionData)
                    .slice(idx * 4, (idx + 1) * 4) // Divide data into chunks of 4
                    .map(key => (
                    <Col key={key} xs={3} className="mb-2 text-center">
                        <Button
                          variant="dark"
                          text="light"
                          className="monthButton"
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
                  <Col key={(idx * 7) + idy + 1} xs={1} className="p-0">
                    <Button
                      variant="dark"
                      text="light"
                      className="my-2 dayButton"
                    >
                      {(idx * 7) + idy + 1}
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
