import { Component, effect, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XzNodeSchema } from 'x-lcdp/model';
import { XzDesignRenderDirective } from '../../directives/design-render.directive';

@Component({
  selector: 'xz-container-wrapper',
  imports: [CommonModule, XzDesignRenderDirective],
  templateUrl: './container-wrapper.html',
  styleUrl: './container-wrapper.less',
})
export class XzContainerWrapper {
  rhDatasource = input.required<XzNodeSchema>();

  constructor() {
    effect(() => {
      console.log('数据源', this.rhDatasource());
    });
  }
}
