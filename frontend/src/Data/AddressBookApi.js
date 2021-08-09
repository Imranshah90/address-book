export default class AddressBookApi {
  baseUrl = "http://localhost:8989";

  async getAllContacts() {
    const response = await fetch(
      `${this.baseUrl}/AddressBook/ListAddressBook.php`
    );

    return await response.json();
  }

  async saveNewContact(contactData) {
    const response = await fetch(
      `${this.baseUrl}/AddressBook/AddNewEntry.php`,
      {
        method: "POST",
        headers: {
          contentType: "application/json",
        },
        body: JSON.stringify(contactData),
      }
    );

    return await response.json();
  }

  async updateContact(contactID, contactData) {
    const response = await fetch(`${this.baseUrl}/AddressBook/EditEntry.php`, {
      method: "POST",
      headers: {
        contentType: "application/json",
      },
      body: JSON.stringify({
        id: contactID,
        ...contactData,
      }),
    });

    return await response.json();
  }

  async deleteContact(contactId) {
    const response = await fetch(
      `${this.baseUrl}/AddressBook/DeleteEntry.php`,
      {
        method: "POST",
        headers: {
          contentType: "application/json",
        },
        body: JSON.stringify({
          id: contactId,
        }),
      }
    );

    return await response.json();
  }
}
