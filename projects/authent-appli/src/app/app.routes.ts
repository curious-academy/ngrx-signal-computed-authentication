import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { authenticationRoutes } from './features/authentication/authentication.routes';
import { userIsAuthenticated } from './features/authentication/guards/authenticate.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(item => item.HomeComponent),
    canActivate: [userIsAuthenticated]
  },
  {
    path: 'authenticate',
    children: authenticationRoutes
  },
  {
    path: '**',
    redirectTo: 'authenticate/login',
    pathMatch: 'full'
  }
];
