import { Reports } from './reports/reports';
import { Users } from './users/users';
import { AdminLayout } from './admin-layout/admin-layout';
import { MainLayout } from './main-layout/main-layout';
import { Routes } from '@angular/router';
import { StudentList } from './student-list/student-list';
import { StudentResult } from './student-result/student-result';

export const routes: Routes = [

   {
    path: '',

    // 🔥 Level 1 Layout
    loadComponent: () =>
      import('./main-layout/main-layout')
      .then(m => m.MainLayout),

    children: [

      {
        path: 'admin',

        // 🔥 Level 2 Layout
        loadComponent: () =>
          import('./admin-layout/admin-layout')
          .then(m => m.AdminLayout),

        children: [

          {
            path: 'dashboard',
            loadComponent: () =>
              import('./dashboard/dashboard')
              .then(m => m.Dashboard)
          },

          {
            path: 'users',
            loadComponent: () =>
              import('./users/users')
              .then(m => m.Users)
          },

          {
            path: 'reports',
            loadComponent: () =>
              import('./reports/reports')
              .then(m => m.Reports)
          },

          // default
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' }

        ]
      }

    ]
  }
];
