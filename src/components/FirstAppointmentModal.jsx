import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaCheck } from "react-icons/fa";

function FirstAppointmentModal(props) {
  const { selectedTime } = props;
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
      <Modal.Body className="m-auto">
        The first available appointment is at {selectedTime}.
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
  selectedTime: PropTypes.string,
};

export default FirstAppointmentModal;