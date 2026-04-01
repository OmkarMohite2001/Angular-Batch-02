import { Routes } from '@angular/router';
import { Login } from '../formsModule/login/login';
import { Student } from '../formsModule/student/student';
import { MainLayout } from '../pages/main-layout/main-layout';

export const routes: Routes = [
 { path: '', redirectTo: 'login', pathMatch: 'full' }, // default login

  { path: 'login', component: Login },

  {
    path: 'main-layout',
    component: MainLayout,
    children: [
      { path: 'student', component: Student },
      { path: '', redirectTo: 'student', pathMatch: 'full' }
    ]
  },

  { path: '**', redirectTo: 'login', pathMatch: 'full' } // invalid url → login
];
