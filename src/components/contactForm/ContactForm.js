import React from "react";

export const ContactForm = ({
  currentName,
  setCurrentName,
  currentPhone,
  setCurrentPhone,
  currentEmail,
  setCurrentEmail,
  handleSubmit,
}) => {
  //3 handlers for settingState
  const handleName = ({ target }) => {
    setCurrentName(target.value);
  };
  const handlePhone = ({ target }) => {
    setCurrentPhone(target.value);
  };
  const handleEmail = ({ target }) => {
    setCurrentEmail(target.value);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={currentName}
          onChange={handleName}
          placeholder="Contact Name"
          aria-label="Contacts Full Name"
          // required
        />
        {/** */}
        <input
          type="email"
          value={currentEmail}
          onChange={handleEmail}
          placeholder="Contact Email"
          aria-label="Contacts Email Address"
          // required
        />
        {/** */}
        <input
          type="tel"
          value={currentPhone}
          onChange={handlePhone}
          placeholder="Contact Phone Number (+44)"
          // pattern="/^(?:\+44|0)\d{10}$/"
          aria-label="Contacts Phone Number"
          // required
        />
        <input type="Submit" aria-label="Add Contact" />
      </form>
    </>
  );
};
