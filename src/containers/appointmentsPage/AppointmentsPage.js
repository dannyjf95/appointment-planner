import React, { useState } from "react";

import { AppointmentForm } from "../../components/appointmentForm/AppointmentForm";
import { TileList } from "../../components/tileList/TileList";

export const AppointmentsPage = ({
  appointments,
  addAppointments,
  contacts,
}) => {
  // console.log(appointments)
  
  /*
  Define state variables for 
  appointment info
  */
  const [currentName, setCurrentName] = useState("");
  const [currentContact, setCurrentContact] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    addAppointments(currentName, currentContact, currentDate, currentTime);
    setCurrentName("");
    setCurrentContact("");
    setCurrentDate("");
    setCurrentTime("");
  };

  return (
    <div>
      <section>
        {/* //In the Add Appointment section, render an AppointmentForm with the following passed via props: */}
        <h2>Add Appointment</h2>
        <AppointmentForm
          handleSubmit={handleSubmit}
          currentName={currentName}
          setCurrentName={setCurrentName}
          //
          currentContact={currentContact}
          setCurrentContact={setCurrentContact}
          //
          currentDate={currentDate}
          setCurrentDate={setCurrentDate}
          //
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
          //
          contacts={contacts}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList bothTiles={appointments} />
      </section>
    </div>
  );
};
