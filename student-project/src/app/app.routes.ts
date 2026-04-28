import { Routes } from '@angular/router';
import { Login } from './features/forms/login/login';
import { Student } from './features/forms/student/student';
import { MainLayout } from './layout/main-layout/main-layout';
import { ReactiveFormDemo } from './features/forms/reactive-form-demo/reactive-form-demo';
import { FormGroupDemo } from './features/forms/form-group-demo/form-group-demo';
import { ToggleTheme } from './features/forms/toggle-theme/toggle-theme';
import { University } from './features/relationships/university/university';
import { Parent } from './features/relationships/parent/parent';
import { StudentList } from './features/students/student-list/student-list';
import { StudentSummery } from './features/students/student-summery/student-summery';
import { PipesExample } from './features/forms/pipes-example/pipes-example';
import { StateManagemen } from './features/forms/state-managemen/state-managemen';
import { authinticationGuard } from './core/guards/authintication-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // default login

  { path: 'login', component: Login },

  {
    path: 'main-layout',
    component: MainLayout,
    children: [
      { path: 'student', component: Student,canActivate:[authinticationGuard] },
      { path: 'reactiveFormsDemo', component: ReactiveFormDemo ,canActivate:[authinticationGuard]},
      { path: 'formsGroupDemo', component: FormGroupDemo ,canActivate:[authinticationGuard]},
      { path: 'toggleThemeDemo', component: ToggleTheme ,canActivate:[authinticationGuard]},
      { path: 'university', component: University ,canActivate:[authinticationGuard]},
      { path: 'parent', component: Parent ,canActivate:[authinticationGuard]},
      { path: 'student-list', component: StudentList ,canActivate:[authinticationGuard]},
      { path: 'student-summery', component: StudentSummery ,canActivate:[authinticationGuard]},
      { path: 'pipes-example', component: PipesExample ,canActivate:[authinticationGuard]},
      { path: 'State-Managemen', component: StateManagemen,canActivate:[authinticationGuard] },
      { path: '', redirectTo: 'student', pathMatch: 'full' },
    ],
  },

  { path: '**', redirectTo: 'login', pathMatch: 'full' }, // invalid url → login
];
