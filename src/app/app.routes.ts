import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AppComponent } from './app.component';
export const routes: Routes = [
  {
    path: '',
    component: ContactComponent,
    title: 'Contacts page',
  },
  // {
  //   path: 'details',
  //   component: DetailsComponent,
  //   title: 'Home Details',
  // },
];
