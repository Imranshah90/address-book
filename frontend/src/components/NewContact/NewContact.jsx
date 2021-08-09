import React, { useState } from "react";
import ContactForm from "../ContactForm";
import Alert from "../Alert";
import AddressBookApi from "../../Data/AddressBookApi";
const NewContact = (props) => {
  const [error, setError] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [contactEmail, setContactEmail] = useState("");

  const api = new AddressBookApi();

  const onSaveContactData = async (event) => {
    event.preventDefault();
    const contactData = {
      first_name: firstName,
      last_name: lastName,
      phone: contactNumber,
      email: contactEmail,
    };
    const data = await api.saveNewContact(contactData);
    if (data.success) {
      props.onAddContact();
      alert("Contact addes successfully");
      return true;
    }

    setError(
      "Unable to save contact, please make sure all data is supplied properly"
    );
    return false;
  };
  return (
    <div className="new-contact col-md-8 mx-auto mb-4">
      {!!props.errorMessage ? <Alert message={props.errorMessage} /> : false}
      <form onSubmit={onSaveContactData} className="card">
        <div className="card-header bg-dark text-white">
          <h5 className="card-title mb-0">Add a new contact</h5>
        </div>

        <ContactForm
          firstName={firstName}
          lastName={lastName}
          contactEmail={contactEmail}
          contactPhone={contactNumber}
          setFirstName={setFirstName}
          setLastName={setLastName}
          setContactPhone={setContactNumber}
          setContactEmail={setContactEmail}
        />
        <div className="card-footer d-flex">
          <button className="btn btn-primary mx-auto">Create Contact</button>
        </div>
      </form>
    </div>
  );
};

export default NewContact;
