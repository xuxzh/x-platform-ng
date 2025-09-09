import {
  AfterViewInit,
  Component,
  computed,
  effect,
  inject,
  OnInit,
  viewChildren,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  XzContainerWrapper,
  XzHistoryService,
  XzSharedService,
} from 'x-lcdp/shared';
import { XzNodeSchema, XzPageContaienr } from 'x-lcdp/model';
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
import localForage from 'localforage';
import { cloneDeep } from 'lodash-es';

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
export class DesignPage implements AfterViewInit {
  designService = inject(XzDesignService);
  pageSchema = computed(() => {
    const schema = this.designService.pageSchema();
    return schema;
  });

  constructor() {
    localForage.getItem('pageSchema').then((pageSchema) => {
      this.designService.initPageContainer(
        (pageSchema as XzPageContaienr) || getDefaultPageSchema()
      );
    });
  }

  ngAfterViewInit(): void {
    console.log(this.pageSchema());
  }

  save() {
    localForage.setItem('pageSchema', this.designService.pageContainer());
  }

  clear() {
    localForage.removeItem('pageSchema').then(() => {
      this.designService.initPageContainer(getDefaultPageSchema());
    });
  }
}
