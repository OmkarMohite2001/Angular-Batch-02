import { Routes } from '@angular/router';
import { App } from './app';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Omkar } from './pages/home/home';

export const routes: Routes = [
    {path:'',component:App},
    {path:'home',component:Omkar},
    {path:'about',component:About},
    {path:'contact',component:Contact}
];
