import { useState } from 'react';
//import api from '../api/axiosConfig';
import '../styles/timeSelection.css';

//import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
//import { getDay } from "date-fns";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { FaCheck } from "react-icons/fa";

//import dateSelectionData from '../data/dateSelectionData.json';

function ConfirmAppointmentCard() {
  //const today = new Date();
  //const day = getDay(today);

  const [charCount, setCharCount] = useState(0);

  return (
    <>
      <Card bg="light" text="dark" className="dateSelectionCard mt-2">
        <Card.Body>
          <Card.Title className="text-center">Confirm your appointment</Card.Title>
          <Form>
            <Row>
              <Form.Group as={Col} controlId="firstNameInput">
                <FloatingLabel
                  controlId="floatingInputName"
                  label="First name"
                  className="mb-2"
                >
                  <Form.Control type="text" placeholder="Enter name" />
                </FloatingLabel>
              </Form.Group>
              <Form.Group as={Col} controlId="lastNameInput">
                <FloatingLabel
                  controlId="floatingInputName"
                  label="Last name"
                  className="mb-2"
                >
                  <Form.Control type="text" placeholder="Enter name" />
                </FloatingLabel>
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} controlId="emailInput">
                <FloatingLabel
                  controlId="floatingInputEmail"
                  label="Email"
                  className="mb-2"
                >
                  <Form.Control type="email" placeholder="Enter email" />
                </FloatingLabel>
              </Form.Group>
              <Form.Group as={Col} controlId="phoneInput">
                <FloatingLabel
                  controlId="floatingInputPhone"
                  label="Phone"
                  className="mb-2"
                >
                  <Form.Control type="tel" placeholder="Enter phone" />
                </FloatingLabel>
              </Form.Group>
            </Row>
            <Row>
              <FloatingLabel
                controlId="floatingInputDetails"
                label="Additional details"
                className="mb-2"
              >
                <Form.Control
                  as="textarea"
                  rows={2}
                  maxLength={100}
                  placeholder="Additional details"
                  onChange={(e) => setCharCount(e.target.value.length)}
                  className="mh-25"
                />
                {/* Add a counter for the number of characters entered */}
                <Form.Text className="text-muted text-left">
                  {charCount}/100
                </Form.Text>
              </FloatingLabel>
            </Row>
            <Row>
              <Button variant="dark" type="submit" className="w-25 m-auto">
                <FaCheck />
              </Button>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

export default ConfirmAppointmentCard;
