//import { useEffect } from 'react';
import PropTypes from 'prop-types';
//import api from '../api/axiosConfig';
import '../styles/timeSelection.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function TimeSelection(props) {

  const {selectedTime, setSelectedTime, appointmentTimes} = props;



  return (
    <>
      <Card bg="light" text="dark" className="timeSelectionCard mt-2">
        <Card.Body>
          { appointmentTimes.length > 0 ? (
            <>
            <Card.Title className="text-center">Select a time</Card.Title>
            <Row className="justify-content-center">
              {appointmentTimes.map((time) => (
                <Col key={time} xs={3} className="mb-2 text-center">
                  <Button
                    variant="dark"
                    text="light"
                    className={selectedTime === time ? "timeButton active" : "timeButton"}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </Button>
                </Col>
                ))}
            </Row>
            </>
          ) : (
            <Card.Title className="text-center">No times available</Card.Title>
          )}
        </Card.Body>
      </Card>
    </>
  );
}

TimeSelection.propTypes = {
  selectedTime: PropTypes.string,
  setSelectedTime: PropTypes.func,
  appointmentTimes: PropTypes.array
};

export default TimeSelection;
