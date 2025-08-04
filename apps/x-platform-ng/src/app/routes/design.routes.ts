import { Routes } from '@angular/router';
import {
  DesignApplication,
  DesignPage,
  DesignPageUi,
  DesignTemplate,
} from '@pages/design';
const routes: Routes = [
  {
    path: 'page',
    component: DesignPage,
    children: [
      {
        path: 'ui',
        component: DesignPageUi,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'ui',
      },
    ],
  },
  {
    path: 'template',
    component: DesignTemplate,
    children: [],
  },
  {
    path: 'application',
    component: DesignApplication,
    children: [],
  },
  // TODO: 其他路径添加非法路径提示
];

export default routes;
