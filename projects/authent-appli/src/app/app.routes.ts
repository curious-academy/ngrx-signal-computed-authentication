import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home'
  },
  {
    path: 'authenticate'
  },
  {
    path: '**',
    redirectTo: 'authenticate/login',
    pathMatch: 'full'
  }
];
