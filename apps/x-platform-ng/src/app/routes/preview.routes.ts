import { Routes } from '@angular/router';
import {
  AppPagePreview,
  PageInfoPreview,
  TemplateInfoPreview,
} from '@pages/preview';
const routes: Routes = [
  {
    path: 'app-page/:uuid',
    component: AppPagePreview,
  },
  {
    path: 'page-info/:uuid',
    component: PageInfoPreview,
  },
  {
    path: 'template-info/:uuid',
    component: TemplateInfoPreview,
  },
];

export default routes;
