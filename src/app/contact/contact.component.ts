import { Component, computed } from '@angular/core';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';
import { RouterOutlet, RouterLink } from '@angular/router';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contact',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  constructor(private ContactService: ContactService, private router: Router) {}

  filteredContacts = computed(() => this.ContactService.getContacts());

  showContacts = false;
  loadContacts() {
    this.ContactService.getContacts;
  }

  deleteContact(contact: Contact) {
    this.ContactService.deleteContact(contact);
  }

  get contactsList() {
    return this.ContactService.CONTACTS();
  }
}
