import React from "react";
const ContactForm = ({
  firstName,
  lastName,
  contactPhone,
  contactEmail,
  setFirstName,
  setLastName,
  setContactPhone,
  setContactEmail,
}) => {
  return (
    <div className="">
      <div className="card-body">
        <div className="row">
          <div className="col-6">
            <label className="form-label text-left">First name</label>
            <input
              className="form-control"
              type="text"
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
          </div>
          <div className="col-6">
            <label className="form-label text-left">Last name</label>
            <input
              className="form-control"
              type="text"
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <label className="form-label text-left">Phone</label>
            <input
              className="form-control"
              type="text"
              value={contactPhone}
              onChange={(event) => setContactPhone(event.target.value)}
            />
          </div>
          <div className="col-6">
            <label className="form-label text-left">Email</label>
            <input
              className="form-control"
              type="email"
              value={contactEmail}
              onChange={(event) => setContactEmail(event.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
