import { Injectable } from '@angular/core';
import { Contact } from './models/contact';
import { signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  CONTACTS = signal<Contact[]>([
    {
      fname: 'John',
      lname: 'Adams',
      emailAddress: 'john.adams@gmail.com',
      phoneNumber: '583-293-9288',
    },
  ]);

  addContact(contact: Contact) {
    this.CONTACTS.update((prev) => [...prev, contact]);
  }

  // Update an existing contact
  updateContact(updatedContact: Contact) {
    this.CONTACTS.update((prev) =>
      prev.map((contact) =>
        contact.phoneNumber === updatedContact.phoneNumber
          ? updatedContact
          : contact
      )
    );
  }

  // Delete a contact
  deleteContact(contactPhone: string) {
    this.CONTACTS.update((prev) =>
      prev.filter((contact) => contact.phoneNumber !== contactPhone)
    );
  }

  getContacts() {
    return this.CONTACTS(); // Access the current value of the signal
  }

  constructor() {}
}
