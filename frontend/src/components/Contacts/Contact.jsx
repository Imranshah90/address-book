import React, { useState } from "react";
import { FaRegEdit, FaTrash } from "react-icons/fa";
import AddressBookApi from "../../Data/AddressBookApi";
import ContactForm from "../ContactForm";
import Alert from "../Alert";

function Contact(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState("");
  const [firstName, setFirstName] = useState(props.fname || "");
  const [lastName, setLastName] = useState(props.lname || "");
  const [contactNumber, setContactNumber] = useState(props.phone || "");
  const [contactEmail, setContactEmail] = useState(props.email || "");

  const api = new AddressBookApi();

  const onDelete = async () => {
    const resp = window.confirm(
      `Are you sure you want to delete contact for ${props.fname} ${props.lname}`
    );
    if (resp) {
      await api.deleteContact(props.id);
      props.refreshAddressBook();
      alert("Contact deleted successfully");
    }
  };

  const onSaveContactData = async (event) => {
    event.preventDefault();
    const contactData = {
      first_name: firstName,
      last_name: lastName,
      phone: contactNumber,
      email: contactEmail,
    };
    const data = await api.updateContact(props.id, contactData);
    if (data.success) {
      props.refreshAddressBook();
      setIsEditing(false);
      alert("Contact updated successfully");

      return true;
    }

    setError(
      "Unable to save contact, please make sure all data is supplied properly"
    );
    return false;
  };

  const fullName = `${props.fname} ${props.lname}`;

  const contactDetails = () => (
    <div className="card mb-4 shadow">
      <div className="card-body">
        <p>
          <strong>{fullName}</strong>
        </p>
        <p>
          <strong>Email:</strong> {props.email}
        </p>
        <p>
          <strong>Phone:</strong> {props.phone}
        </p>
      </div>

      <div className="card-footer d-flex justify-content-center">
        <div className="Contacts-btn">
          <button
            className="btn btn-sm btn-primary  me-2"
            onClick={() => setIsEditing(true)}
          >
            <FaRegEdit /> Edit
          </button>
          <button className="btn btn-sm btn-danger" onClick={onDelete}>
            <FaTrash /> Delete
          </button>
        </div>
      </div>
    </div>
  );

  const editContactForm = () => (
    <div className="new-contact mb-4 shadow">
      {!!props.errorMessage ? <Alert message={props.errorMessage} /> : false}
      <form onSubmit={onSaveContactData} className="card">
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
        <div className="card-footer d-flex justify-content-center">
          <button className="btn btn-sm btn-primary me-2" type="submit">
            Update Contact
          </button>
          <button
            className="btn btn-sm btn-danger "
            type="button"
            onClick={() => setIsEditing(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );

  return <div>{!isEditing ? contactDetails() : editContactForm()}</div>;
}

export default Contact;
