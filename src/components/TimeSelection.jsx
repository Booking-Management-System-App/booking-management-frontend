//import { useState, useEffect } from 'react';
//import api from '../api/axiosConfig';
import '../styles/timeSelection.css';

//import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
//import { getDay } from "date-fns";
import Card from 'react-bootstrap/Card';

import dateSelectionData from '../data/dateSelectionData.json';

function TimeSelection() {
  //const today = new Date();
  //const day = getDay(today);

  return (
    <>
      <Card bg="light" text="dark" className="dateSelectionCard mt-2">
        <Card.Body>
          <Card.Title className="text-center">Select a time</Card.Title>
          {Array.from({ length: 3 }).map((_, idx) => (
              <Row key={idx} className="justify-content-center">
              {Object.keys(dateSelectionData)
                  .slice(idx * 4, (idx + 1) * 4) // Divide data into chunks of 4
                  .map(key => (
                  <Col key={key} xs={3} className="mb-2 text-center">
                      <Button
                        variant="dark"
                        text="light"
                        size="lg"
                        className="px-3 py-2"
                      >
                        {dateSelectionData[key].short}
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

export default TimeSelection;
