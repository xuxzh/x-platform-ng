import { Routes } from '@angular/router';
import { TestOnly } from '@pages';

const routes: Routes = [
  {
    path: 'test-only',
    component: TestOnly,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'test-only',
  },
];

export default routes;
