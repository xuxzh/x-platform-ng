import {
  AfterViewInit,
  Component,
  computed,
  effect,
  inject,
  input,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { XzNodeSchema, XzPageContaienr } from 'x-lcdp/model';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';

import { XzDesignRenderDirective } from '../../directives/design-render.directive';
import {
  XzDragDropDirective,
  XzDragDropService,
  XzJsonSchemaHelper,
} from 'x-lcdp/core';
import { XzSafeAny } from 'x-base/model';
import { cloneDeep } from 'lodash-es';
import { XzDesignService } from '../../services/design.service';

@Component({
  selector: 'xz-container-wrapper',
  imports: [CommonModule, XzDesignRenderDirective, DragDropModule, CdkDrag],
  templateUrl: './container-wrapper.html',
  styleUrl: './container-wrapper.less',
  hostDirectives: [
    {
      directive: CdkDropList,
      inputs: ['cdkDropListData:rhDatasource'],
    },
  ],
  host: {
    '[class]': 'wrapperClass()',
  },
})
export class XzContainerWrapper
  extends XzDragDropDirective
  implements OnDestroy
{
  rhDatasource = input.required<XzNodeSchema>();
  class = input('');

  designSer = inject(XzDesignService);

  wrapperClass = computed(() => {
    return `${this.class()} min-h-24 p-1`;
  });

  constructor() {
    super();
    effect(() => {
      this.dropList.connectedTo = this.dragDropSer?.dropLists() || [];
      this.dropList.enterPredicate = this.allowDropPredicate;
      this.dropList.dropped.subscribe((event) => {
        this.dropped(event);
      });
    });
  }

  ngOnDestroy(): void {
    this.dragDropSer?.unregister(this.dropList as CdkDropList<XzSafeAny>);
  }

  private async dropped(event: CdkDragDrop<XzSafeAny>) {
    const dragData = event.item.data;
    const targetIndex = event.currentIndex;
    const containerData: XzNodeSchema = cloneDeep(event.container.data);
    containerData.children = containerData.children || [];
    try {
      if (event.previousContainer === event.container) {
        // 设计器内部同一个容器中拖动排序
        moveItemInArray(
          event.container.data.children,
          event.previousIndex,
          event.currentIndex
        );
        // 刷新page schema?
      } else {
        const resourceType = dragData?.['code'] && dragData?.['resourceType'];
        switch (resourceType) {
          case 'component':
            this.designSer.componentDropped(
              dragData,
              containerData,
              targetIndex
            );
            break;

          default: {
            // 不同的设计容器间拖动
            const preContainer = event.previousContainer.data;
            const curContainer = event.container.data;
            const dragData = preContainer.children[event.previousIndex];
            dragData.parent = event.container.data.key;
            transferArrayItem(
              preContainer.children,
              curContainer.children,
              event.previousIndex,
              event.currentIndex
            );
            this.designSer.updatePageContainer((page) => {
              page = XzJsonSchemaHelper.replaceSchemaNode(
                preContainer as XzNodeSchema,
                page
              );
              page = XzJsonSchemaHelper.replaceSchemaNode(
                curContainer as XzNodeSchema,
                page
              );
              return { ...page };
            });
            break;
          }
        }
      }
    } catch (error: XzSafeAny) {
      // MsgHelper.ShowErrorModal(`渲染发生错误：${error.message}`);
    }
  }
}
