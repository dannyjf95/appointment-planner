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

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={currentName}
          placeholder=""
          aria-label="Contact Name"
          onChange={handleName}
          // required
        />
        <ContactPicker contacts={contacts} />
        <input
          type="date"
          value={currentDate}
          placeholder=""
          aria-label="Date selector"
          onChange={handleDate}
          min={getTodayString()}
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
