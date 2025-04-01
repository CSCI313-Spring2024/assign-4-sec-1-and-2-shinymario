import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterLink } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ContactService } from './contact.service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ContactComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'assignment-4';

  constructor(private ContactService: ContactService, private router: Router) {}

  toggleContactList() {
    this.router.navigate(['contacts']);
  }
}
