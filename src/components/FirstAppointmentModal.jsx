import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaCheck } from "react-icons/fa";

function FirstAppointmentModal(props) {
  const {
    selectedYear,
    selectedMonth,
    selectedDay,
    selectedTime } = props;

  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header>
        <Modal.Title>Appointment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>The first available appointment is on:</p>
        <p className="text-center m-0 fw-bold">{new Date(selectedYear, selectedMonth - 1, selectedDay).toDateString()} at {selectedTime}.</p>
      </Modal.Body>
      <Modal.Footer className="m-auto">
        <Button variant="dark" onClick={handleClose}>
          <FaCheck />
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

FirstAppointmentModal.propTypes = {
  selectedYear: PropTypes.number,
  selectedMonth: PropTypes.number,
  selectedDay: PropTypes.number,
  selectedTime: PropTypes.string,
};

export default FirstAppointmentModal;