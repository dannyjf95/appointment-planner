import React, { useState, useEffect } from "react";

import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContacts }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [currentName, setCurrentName] = useState("");
  const [currentPhone, setCurrentPhone] = useState("");
  const [currentEmail, setCurrentEmail] = useState("");
  const [duplicate, setDuplicate] = useState(false);
  /*Using hooks, check for contact name in the contacts array variable in props*/
  useEffect(() => {
    //finds first instance of duplicate name(contact) evaluates to true
    const existingContact = contacts.some(
      (contact) => contact.name === currentName
    );
    setDuplicate(existingContact);
  }, [currentName, contacts /**only gets called when either are updated */]);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*Add contact info and clear data if the contact name is not a duplicate */
    if (!duplicate) {
      addContacts(currentName, currentEmail, currentPhone);
      setCurrentName("");
      setCurrentPhone("");
      setCurrentEmail("");
    }
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          handleSubmit={handleSubmit}
          //name state/setState
          currentName={currentName}
          setCurrentName={setCurrentName}
          //phone state/setState
          currentPhone={currentPhone}
          setCurrentPhone={setCurrentPhone}
          //email state/setState
          currentEmail={currentEmail}
          setCurrentEmail={setCurrentEmail}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList /**App state contacts */ bothTiles={contacts} />
      </section>
    </div>
  );
};
