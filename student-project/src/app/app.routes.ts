import { Routes } from '@angular/router';
import { Login } from '../formsModule/login/login';
import { Student } from '../formsModule/student/student';
import { MainLayout } from '../pages/main-layout/main-layout';
import { ReactiveFormDemo } from '../formsModule/reactive-form-demo/reactive-form-demo';
import { FormGroupDemo } from '../formsModule/form-group-demo/form-group-demo';
import { ToggleTheme } from '../formsModule/toggle-theme/toggle-theme';
import { University } from '../relationParentChild/university/university';
import { Parent } from '../relationParentChild/parent/parent';
import { StudentList } from '../services/student-list/student-list';
import { StudentSummery } from '../services/student-summery/student-summery';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // default login

  { path: 'login', component: Login },

  {
    path: 'main-layout',
    component: MainLayout,
    children: [
      { path: 'student', component: Student },
      { path: 'reactiveFormsDemo', component: ReactiveFormDemo },
      { path: 'formsGroupDemo', component: FormGroupDemo },
      { path: 'toggleThemeDemo', component: ToggleTheme },
      { path: 'university', component: University },
      { path: 'parent', component: Parent },
      { path: 'student-list', component: StudentList },
      { path: 'student-summery', component: StudentSummery },
      { path: '', redirectTo: 'student', pathMatch: 'full' },
    ],
  },

  { path: '**', redirectTo: 'login', pathMatch: 'full' }, // invalid url → login
];
