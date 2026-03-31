import { Routes } from '@angular/router';
import { AdminLayout } from '../layout/admin-layout/admin-layout';
import { User } from '../layout/user/user';
import { Dashboard } from '../layout/dashboard/dashboard';
import { MainLayout } from '../layout/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../layout/main-layout/main-layout').then((m) => m.MainLayout),
    // component:MainLayout,
    children: [
      { path: 'admin', component: AdminLayout ,
        children:[
          {path:'',component:Dashboard}
        ]
      },
      { path: 'employee', component: User },
    ],
  },
];
