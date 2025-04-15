import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AppComponent } from './app.component';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { EditcontactComponent } from './editcontact/editcontact.component';
export const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
    title: 'Contacts page',
  },
  {
    path: 'add',
    component: AddcontactComponent,
    title: 'Add Contact',
  },
  {
    path: 'edit/:id',
    component: EditcontactComponent,
    title: 'Edit Contact',
  },
];
