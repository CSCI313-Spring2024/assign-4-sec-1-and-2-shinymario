import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterLink } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';
import { ContactService } from '../contact.service';
import { Contact } from '../models/contact';
import { computed } from '@angular/core';
import { signal } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { IdcounterService } from '../idcounter.service'; // Import the IdcounterService
@Component({
  selector: 'app-addcontact',
  imports: [FormsModule, RouterLink],
  templateUrl: './addcontact.component.html',
  styleUrl: './addcontact.component.css',
})
export class AddcontactComponent {
  constructor(
    private ContactService: ContactService,
    private router: Router,
    private IdService: IdcounterService
  ) {}

  ngOnInit(): void {
    // Get the next incremented ID
    this.id = this.IdService.getNextId();
  }
  id!: number;
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phone: string = '';

  newContact: Contact = {
    id: this.id,
    fname: '',
    lname: '',
    emailAddress: '',
    phoneNumber: '',
  }; // Initialize a new contact object

  addContact(contactForm: NgForm) {
    if (!contactForm.valid) {
      alert('Please fill in all fields.');
    }

    this.newContact.fname = this.firstName;
    this.newContact.lname = this.lastName;
    this.newContact.emailAddress = this.email;
    this.newContact.phoneNumber = this.phone;

    this.ContactService.addContact(this.newContact);

    console.log('Adding new contact:', this.newContact);

    contactForm.reset();
  }
}
