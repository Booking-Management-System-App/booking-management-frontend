//import { useState, useEffect } from 'react';
//import api from '../api/axiosConfig';
import '../styles/dateSelection.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

import dateSelectionData from '../data/dateSelectionData.json';

function DateSelection() {
  //const [data, setData] = useState([]);

  return (
    <>
      <Container fluid className="mt-3 dateSelectionContainer">
        <h1>Select a date</h1>
        {Array.from({ length: 3 }).map((_, idx) => (
            <Row key={idx} className="m-auto justify-content-center">
            {Object.keys(dateSelectionData)
                .slice(idx * 4, (idx + 1) * 4) // Divide data into chunks of 4
                .map(key => (
                <Col key={key} xs={2} className="mb-2">
                    <Badge pill bg="dark" text="light" className="px-4 py-2 monthBadge">
                    {dateSelectionData[key].short}
                    </Badge>
                </Col>
                ))}
            </Row>
        ))}
        <Row className="blankRow"></Row>
        <Row className='justify-content-center daysOfTheWeek'>
            <Col xs={1} className="day">S</Col>
            <Col xs={1} className="day">M</Col>
            <Col xs={1} className="day">T</Col>
            <Col xs={1} className="day">W</Col>
            <Col xs={1} className="day">T</Col>
            <Col xs={1} className="day">F</Col>
            <Col xs={1} className="day">S</Col>
        </Row>
        {/* TODO: Use function and state to get/update days in month and align */}
        </Container>
    </>
  )
}

export default DateSelection;
