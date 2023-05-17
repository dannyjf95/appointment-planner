import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

const getTodayString = (/**removed empty object */) => {
  const [month, day, year] = new Date().toLocaleDateString("en-US").split("/");
  return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
};

export const AppointmentForm = ({
  contacts,
  currentName,
  setCurrentName,
  currentContact,
  setCurrentContact,
  currentDate,
  setCurrentDate,
  currentTime,
  setCurrentTime,
  handleSubmit,
}) => {
  //3 handlers for settingState
  const handleName = ({ target }) => {
    setCurrentName(target.value);
  };
  const handleDate = ({ target }) => {
    setCurrentDate(target.value);
  };
  const handleTime = ({ target }) => {
    setCurrentTime(target.value);
  };
  const handleContacts = ({ target }) => {
    setCurrentContact(target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          value={currentName}
          aria-label="Contact Name"
          onChange={handleName}
          placeholder="Nature of meeting"
          // required
        />
        <ContactPicker
          name="contact selector"
          contacts={contacts}
          value={currentContact}
          onChange={handleContacts}
        />
        <input
          name="date"
          type="date"
          value={currentDate}
          placeholder=""
          aria-label="Date selector"
          onChange={handleDate}
          min={getTodayString()}
          // required
        />
        <input
          name="time"
          type="time"
          value={currentTime}
          aria-label="Time selector"
          onChange={handleTime}

          // required
        />
        <input type="Submit" aria-label="Add Appointment" />
      </form>
    </>
  );
};
