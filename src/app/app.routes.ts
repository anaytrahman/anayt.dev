import { Routes } from '@angular/router';

// Single-page portfolio: all sections live on the Home component and are
// reached via smooth-scroll anchor navigation from the navbar.
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home.component').then((m) => m.HomeComponent),
  },
  { path: '**', redirectTo: '' },
];
