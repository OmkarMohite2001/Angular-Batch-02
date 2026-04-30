import { Routes } from '@angular/router';
import { Login } from './features/forms/login/login';
import { MainLayout } from './layout/main-layout/main-layout';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // default login

  { path: 'login', component: Login },

  {
    path: 'main-layout',
    component: MainLayout,
    children: [
      // { path: 'student', component: Student,canActivate:[authinticationGuard] },
      {path:'student',loadComponent:()=>import('./features/forms/student/student').then(c =>c.Student)},

      // { path: 'reactiveFormsDemo', component: ReactiveFormDemo ,canActivate:[authinticationGuard]},
      {path:'reactiveFormsDemo',loadComponent:()=>import('./features/forms/reactive-form-demo/reactive-form-demo').then(c =>c.ReactiveFormDemo)},
      // { path: 'formsGroupDemo', component: FormGroupDemo ,canActivate:[authinticationGuard]},
      {path:'formsGroupDemo',loadComponent:()=>import('./features/forms/form-group-demo/form-group-demo').then(c =>c.FormGroupDemo)},
      // { path: 'toggleThemeDemo', component: ToggleTheme ,canActivate:[authinticationGuard]},
      {path:'toggleThemeDemo',loadComponent:()=>import('./features/forms/toggle-theme/toggle-theme').then(c =>c.ToggleTheme)},
      // { path: 'university', component: University ,canActivate:[authinticationGuard]},
      {path:'university',loadComponent:()=>import('./features/relationships/university/university').then(c =>c.University)},
      // { path: 'parent', component: Parent ,canActivate:[authinticationGuard]},
      {path:'parent',loadComponent:()=>import('./features/relationships/parent/parent').then(c =>c.Parent)},
      // { path: 'student-list', component: StudentList ,canActivate:[authinticationGuard]},
      {path:'student-list',loadComponent:()=>import('./features/students/student-list/student-list').then(c =>c.StudentList)},
      // { path: 'student-summery', component: StudentSummery ,canActivate:[authinticationGuard]},
      {path:'student-summery',loadComponent:()=>import('./features/students/student-summery/student-summery').then(c =>c.StudentSummery)},
      // { path: 'pipes-example', component: PipesExample ,canActivate:[authinticationGuard]},
      {path:'pipes-example',loadComponent:()=>import('./features/forms/pipes-example/pipes-example').then(c =>c.PipesExample)},
      // { path: 'State-Managemen', component: StateManagemen,canActivate:[authinticationGuard] },
      {path:'State-Managemen',loadComponent:()=>import('./features/forms/state-managemen/state-managemen').then(c =>c.StateManagemen)},
      { path: '', redirectTo: 'student', pathMatch: 'full' },
    ],
  },

  { path: '**', redirectTo: 'login', pathMatch: 'full' }, // invalid url → login
];
