import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'demo',
    loadChildren: () => import('@routes/demo.routes'),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'demo',
  },
];
