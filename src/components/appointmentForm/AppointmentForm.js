import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";
const getTodayString = ({}) => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  currentTitle,
  setTitle,
  currentContact,
  setCurrentContact,
  currentDate,
  setCurrentDate,
  currentTime,
  setCurrentTime,
  handleSubmit,
}) => {
  const handleContact = ({ target }) => {
    setCurrentContact(target.value);
  };
  const handleDate = ({ target }) => {
    setCurrentDate(target.value);
  };
  const handleTime = ({ target }) => {
    setCurrentTime(target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={currentContact}
          placeholder=""
          aria-label="Contact Name"
          onChange={handleContact}
          // required
        />
        <ContactPicker contacts={contacts} />
        <input
          type="date"
          value={currentDate}
          placeholder=""
          aria-label="Date selector"
          onChange={handleDate}
          // required
        />
        <input
          type="time"
          value={currentTime}
          aria-label="Time selector"
          onChange={handleTime}
          // required
        />
        <input type="submit" aria-label="Add Appointment" />
      </form>
    </>
  );
};
