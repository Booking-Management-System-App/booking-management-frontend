import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";

import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";
import { Card } from "react-bootstrap";

function MyAppointmentsPage() {
  const [appointments,] = useState([
    { id: 1, date: "2021-12-01", time: "10:00" },
    { id: 2, date: "2021-12-01", time: "11:00" },
    { id: 3, date: "2021-12-01", time: "12:00" },
    { id: 4, date: "2021-12-01", time: "13:00" },
    { id: 5, date: "2021-12-01", time: "14:00" },
    { id: 6, date: "2021-12-01", time: "15:00" },
    { id: 7, date: "2021-12-01", time: "16:00" },
    { id: 8, date: "2021-12-01", time: "17:00" },
    { id: 9, date: "2021-12-01", time: "18:00" },
    { id: 10, date: "2021-12-01", time: "19:00" },
  ]);

  useEffect(() => {
    // Get the user's bookings from the server
    // api.get('/appointments')
    //   .then(res => {
    //     setAppointments(res.data);
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }, []);

  return (
    <>
    <Container fluid className="app-container">
      <NavigationBar />
      {appointments.map(appointment => (
        <Card key={appointment.id} bg="light" text="dark" className="dateSelectionCard mt-2 py-0 h-100">
          <p>{appointment.date} at {appointment.time}</p>
        </Card>
      ))}
    </Container>
    <Footer />
    </>
  );
}

export default MyAppointmentsPage;