import React, { useEffect, useState } from "react";
import ContactsList from "./components/Contacts/ContactsList";
import NewContact from "./components/NewContact/NewContact";
import AddressBookApi from "./Data/AddressBookApi";

function App() {
  const api = new AddressBookApi();
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    const data = await api.getAllContacts();
    if (data) {
      setContacts(data);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="container">
      <h2 className="app-title">Contact Book</h2>
      <NewContact onAddContact={fetchContacts} />
      <ContactsList items={contacts} refreshAddressBook={fetchContacts} />
    </div>
  );
}

export default App;
