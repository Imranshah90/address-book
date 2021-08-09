import { useState } from "react";
import Contact from "./Contact";

function ContactsList(props) {
  const [searchText, setSearchText] = useState("");

  const filteredContacts = props.items.filter((item) => {
    return `${item.first_name} ${item.last_name}`
      .toLowerCase()
      .includes(searchText.toLowerCase());
  });

  return (
    <div>
      <div className="col-8 mx-auto mb-4">
        <div className="card">
          <div className="card-header d-flex justify-content-between">
            <h5 className="card-title mb-0">Contacts</h5>
            <div>
              <input
                className="form-control"
                type="search"
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
                placeholder="Search contacts..."
              />
            </div>
          </div>
          <div className="card-body">
            <div className="row justify-content-center">
              {filteredContacts.map((contact) => (
                <div className="col-lg-8 col-sm-12" key={contact.id}>
                  <Contact
                    refreshAddressBook={props.refreshAddressBook}
                    id={contact.id}
                    fname={contact.first_name}
                    lname={contact.last_name}
                    phone={contact.phone}
                    email={contact.email}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactsList;
