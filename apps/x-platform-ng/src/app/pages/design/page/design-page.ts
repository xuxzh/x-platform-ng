import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XzContainerWrapper } from 'x-lcdp/shared';
import { XzNodeSchema } from 'x-lcdp/model';

@Component({
  selector: 'app-design-page',
  imports: [CommonModule, XzContainerWrapper],
  templateUrl: './design-page.html',
  styleUrl: './design-page.less',
})
export class DesignPage {
  pageSchema: XzNodeSchema = {
    code: 'PAGE_KEY',
    name: '主页',
    key: 'PAGE_KEY',
    compCode: 'page',
    children: [
      {
        key: '1',
        code: 'div1',
        name: '块容器',
        compCode: 'div',
        children: [
          {
            key: '2',
            code: 'button1',
            name: '按钮',
            compCode: 'button',
          },
        ],
      },
    ],
  };
}
