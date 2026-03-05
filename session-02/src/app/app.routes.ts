import { Routes } from '@angular/router';
import { App } from './app';
import { LifeCycle } from '../life-cycle/life-cycle';
import { Student } from '../student/student';

export const routes: Routes = [
  {path:'',component:App},
  {path:'lifeCycle',component:LifeCycle},
  {path:'student',component:Student}
];
