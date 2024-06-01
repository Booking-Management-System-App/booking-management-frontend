import { useState } from 'react';
//import PropTypes from 'prop-types';
//import api from '../api/axiosConfig';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { MdOutlineAccountCircle } from "react-icons/md";

function NavigationBar() {

  const [loggedIn,] = useState(false);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">BookMeBuddy</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#myAppointments">My Apppointments</Nav.Link>
              </Nav>
              <Nav className="ms-auto">
                {loggedIn ? (
                  <NavDropdown title={<MdOutlineAccountCircle size={22} />} id="basic-nav-dropdown">
                    <NavDropdown.Item href="#profile">Profile</NavDropdown.Item>
                    <NavDropdown.Item href="#settings">Settings</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#logout">Logout</NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <Nav.Link href="#login" className="me-0 p-0"><Button variant="dark">Login</Button></Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    </>
  );
}

export default NavigationBar;