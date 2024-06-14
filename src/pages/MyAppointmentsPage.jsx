import { useState, useEffect } from "react";
import NavigationBar from "../components/NavigationBar";

function MyAppointmentsPage() {
  const [appointments,] = useState([]);

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
    <div>
      <NavigationBar />
      <h1>My Appointments</h1>
      <p>Here are your upcoming appointments:</p>
      <ul>
        {appointments.map(appointment => (
          <li key={appointment.id}>
            <p>{appointment.date} at {appointment.time}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyAppointmentsPage;