import { useState } from 'react';
//import api from '../api/axiosConfig';
import '../styles/timeSelection.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function TimeSelection() {

  const [selectedTime, setSelectedTime] = useState(0);

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

  return (
    <>
      <Card bg="light" text="dark" className="timeSelectionCard mt-2">
        <Card.Body>
          <Card.Title className="text-center">Select a time</Card.Title>
          <Row className="justify-content-center">
            {times.map((time, idx) => (
                  <Col key={idx} xs={3} className="mb-2 text-center">
                  <Button
                    variant="dark"
                    text="light"
                    className={selectedTime === idx ? "timeButton active" : "timeButton"}
                    onClick={() => setSelectedTime(idx)}
                  >
                    {time}
                  </Button>
                  </Col>
              ))}
          </Row>
        </Card.Body>
      </Card>
    </>
  );
}

export default TimeSelection;
