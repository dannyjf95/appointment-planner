import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
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
    <></>
  );
};

