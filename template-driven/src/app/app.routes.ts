import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Student } from './student/student';

export const routes: Routes = [
  {path:'',component:Login},
  {path:'login',component:Login},
  {path:'student',component:Student},
  {path:'**',component:Login}
];
