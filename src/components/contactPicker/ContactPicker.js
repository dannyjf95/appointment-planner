import React from "react";

export const ContactPicker = ({ contacts, name, value, onChange }) => {
  // console.log(contacts);
  const mappedContacts = contacts.map((contact, index) => {
    return <option key={index} value={contact.name}>{contact.name}</option>
  })
  
  // console.log(mappedContacts)
  return (
    <>
      
    </>
  );
};
