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

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phone: string = '';

  addContact(contactForm: NgForm) {
    let emailRegex = /^[^@]+@.+\.com$/;
    const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;

    let match1 = this.email.match(emailRegex);
    let match2 = this.phone.match(phoneRegex);
    if (!contactForm.valid) {
      alert('Please fill in all fields.');
      return;
    }

    if (!isNaN(parseFloat(this.firstName))) {
      alert('Please Enter A Valid Name');
      return;
    }

    if (!isNaN(parseFloat(this.lastName))) {
      alert('Please Enter A Valid Name');
      return;
    }

    if (!match1) {
      alert('Please Enter A Valid Email');
      return;
    }

    if (!match2) {
      alert('Please Enter A Valid Phone');
      return;
    }

    const newContact: Contact = {
      id: this.IdService.getNextId(),
      fname: this.firstName,
      lname: this.lastName,
      emailAddress: this.email,
      phoneNumber: this.phone,
    };

    this.ContactService.addContact(newContact);

    console.log('Adding new contact:', newContact);

    contactForm.reset();
  }
}
