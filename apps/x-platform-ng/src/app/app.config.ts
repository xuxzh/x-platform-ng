import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { zh_CN, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { appRoutes } from './app.routes';

import {
  XZ_DESIGN_COMPONENT_CONFIG,
  XzComponentGroupConfig,
} from 'x-lcdp/core';
import { XzButton, XzDiv } from 'x-lcdp/design';

registerLocaleData(zh);

const componentConfig: XzComponentGroupConfig[] = [
  {
    code: 'layout',
    name: '容器布局',
    children: [
      {
        code: 'div',
        name: '块容器(DIV)',
        component: XzDiv,
        resourceType: 'component',
        compType: 'container',
      },
    ],
  },
  {
    code: 'general',
    name: '通用',
    children: [
      {
        code: 'button',
        name: '按钮',
        component: XzButton,
        resourceType: 'component',
        compType: 'general',
      },
    ],
  },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideHttpClient(),
    provideAnimations(),
    provideNzI18n(zh_CN),
    {
      provide: XZ_DESIGN_COMPONENT_CONFIG,
      useValue: componentConfig,
    },
  ],
};
