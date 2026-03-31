import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'about', component: About },
  { path: 'contact/:id', component: Contact },
  {path:'user',loadComponent:()=>import('./user/user').then(m=>m.User)},  //lazy loading
  { path: '**', component: Home },
];
