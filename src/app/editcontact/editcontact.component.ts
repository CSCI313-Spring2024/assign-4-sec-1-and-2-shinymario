import { Component } from '@angular/core';
import {
  Router,
  RouterOutlet,
  RouterLink,
  ActivatedRoute,
} from '@angular/router';
import { ContactComponent } from '../contact/contact.component';
import { ContactService } from '../contact.service';
import { Contact } from '../models/contact';
import { computed } from '@angular/core';
import { signal } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
@Component({
  selector: 'app-editcontact',
  imports: [FormsModule, RouterLink],
  templateUrl: './editcontact.component.html',
  styleUrl: './editcontact.component.css',
})
export class EditcontactComponent {
  constructor(
    private ContactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  id!: number;
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phone: string = '';

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    const contact = this.ContactService.getContacts().find(
      (contact) => contact.id === this.id
    );

    if (contact) {
      this.firstName = contact.fname;
      this.lastName = contact.lname;
      this.email = contact.emailAddress;
      this.phone = contact.phoneNumber;
    } else {
      alert('Contact not found!');
      this.router.navigate(['']);
    }
  }

  editContact(contactForm: NgForm) {
    if (!contactForm.valid) {
      alert('Please fill in all fields.');
    }

    const contact = this.ContactService.getContacts().find(
      (contact) => contact.id === this.id
    );

    if (!contact) {
      alert('Contact not found!');
      return;
    }

    contact.fname = this.firstName;
    contact.lname = this.lastName;
    contact.emailAddress = this.email;
    contact.phoneNumber = this.phone;

    this.ContactService.updateContact(contact);

    contactForm.reset();
    this.router.navigate(['']); // Optional: route back to list
  }
}
