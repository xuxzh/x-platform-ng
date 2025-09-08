import {
  Component,
  computed,
  effect,
  inject,
  viewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  XzContainerWrapper,
  XzHistoryService,
  XzSharedService,
} from 'x-lcdp/shared';
import { XzNodeSchema } from 'x-lcdp/model';
import { XzComponentPool } from 'x-lcdp/design';
import { XzDragDropDirective, XzDragDropService } from 'x-lcdp/core';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  DragDropModule,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { XzDesignService } from 'x-lcdp/shared';
import { getDefaultPageSchema } from 'x-lcdp/data';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'app-design-page',
  imports: [
    CommonModule,
    XzContainerWrapper,
    XzComponentPool,
    DragDropModule,
    NzIconModule,
    NzButtonModule,
  ],
  templateUrl: './design-page.html',
  styleUrl: './design-page.less',
  providers: [
    XzDragDropService,
    XzDesignService,
    XzSharedService,
    XzHistoryService,
  ],
})
export class DesignPage {
  designService = inject(XzDesignService);
  pageSchema = computed(() => {
    return this.designService.pageSchema();
    // const childrenDatas = this.designService.pageSchema().children;
    // return childrenDatas?.[0] || ({} as XzNodeSchema);
  });

  constructor() {
    this.designService.initPageContainer(getDefaultPageSchema());
  }
}
