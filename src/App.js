import React, { useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContacts] = useState([
    { name: "Dan", phone: 123, email: "example@example.com" },
    { name: "Amy", phone: 456, email: "example1@example.com" },
    { name: "Harry", phone: 789, email: "example2@example.com" },
  ]);
  const [appointments, setAppointments] = useState([
    {name: 'business Meeting', contact: 'Dan', date: '25th october', time: 1100}
  ]);

  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addContacts = (name, phone, email) => {
    //add to new contact object to new array that includes ...prev contacts
    setContacts([
      ...contacts,
      {
        name: name,
        phone: phone,
        email: email,
      },
    ]);
  };

  const addAppointments = ({ name, contact, date, time }) => {
  setAppointments([
    ...appointments,
    {
      name: name,
      contact: contact,
      date: date,
      time: time,
    },
  ]);
};


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
        <Route
          path={ROUTES.CONTACTS}
          element={
            <ContactsPage
              contacts={contacts}
              addContacts={addContacts}
            /> /* Add props to ContactsPage */
          }
        />
        <Route
          path={ROUTES.APPOINTMENTS}
          element={
            <AppointmentsPage
              appointments={appointments}
              addAppointments={addAppointments}
              contacts={contacts}
            /> /* Add props to AppointmentsPage */
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
