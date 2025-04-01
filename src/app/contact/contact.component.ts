import { Component, computed } from '@angular/core';
import { ContactService } from '../contact.service';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-contact',
  imports: [RouterOutlet],
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

  get contactsList() {
    return this.ContactService.CONTACTS();
  }
}
