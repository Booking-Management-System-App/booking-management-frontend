import { useState } from 'react';
//import api from '../api/axiosConfig';
import '../styles/confirmAppointmentCard.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { FaCheck } from "react-icons/fa";

function ConfirmAppointmentCard() {

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
              <Form.Group as={Col} controlId="detailsInput">
                <FloatingLabel
                  controlId="floatingInputDetails"
                  label="Details"
                >
                  <Form.Control
                    as="textarea"
                    maxLength={100}
                    placeholder="Details"
                    onChange={(e) => setCharCount(e.target.value.length)}
                    className="confirmAppointmentDetailsInput"
                  />
                  {/* Add a counter for the number of characters entered */}
                  <Form.Text className="text-muted text-left">
                    {charCount}/100
                  </Form.Text>
                </FloatingLabel>
              </Form.Group>
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
