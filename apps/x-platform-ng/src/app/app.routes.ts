import { Route } from '@angular/router';
import { MainFrame } from '@pages';

export const appRoutes: Route[] = [
  {
    path: 'passport',
    loadChildren: () => import('@routes/passport.routes'),
  },
  {
    path: 'main',
    component: MainFrame,
    loadChildren: () => import('@routes/main.routes'),
  },
  {
    path: 'design',
    loadChildren: () => import('@routes/design.routes'),
  },
  {
    path: 'preview',
    loadChildren: () => import('@routes/preview.routes'),
  },
  {
    path: 'application',
    loadChildren: () => import('@routes/application.routes'),
  },
  {
    path: 'demo',
    loadChildren: () => import('@routes/demo.routes'),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'design/page/ui',
  },
];
