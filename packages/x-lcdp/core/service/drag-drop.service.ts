import { inject, Inject, Injectable, signal } from '@angular/core';
import type {
  CdkDropList,
  CdkDragMove,
  CdkDragRelease,
  CdkDragDrop,
  CdkDrag,
} from '@angular/cdk/drag-drop';
import { DOCUMENT } from '@angular/common';
import { XzSafeAny } from 'x-base/model';

/**
 * 拖放服务，用于维护droplist的相互连接关系
 * @description 该服务会统一管理界面中的`droplist`实例，并动态维护每个`droplist`可以拖动到的其他`droplist`:`cdkDropListConnectedTo`
 */
@Injectable()
export class XzDragDropService {
  document = inject(DOCUMENT);

  // #dropLists: CdkDropList[] = [];

  // get dropLists(): CdkDropList[] {
  //   console.log('拖动容器', this.#dropLists);
  //   return this.#dropLists;
  // }

  dropLists = signal<string[]>([]);

  /** 定位当前hover过的DropList的id值 */
  currentHoverDropListId?: string;

  register(dropList: CdkDropList | CdkDropList[] | undefined) {
    if (!dropList) {
      return;
    }
    if (Array.isArray(dropList)) {
      this.dropLists.update((list) => {
        return [...list, ...dropList.map((ele) => ele.id)];
      });
    } else {
      this.dropLists.update((list) => {
        return [...list, dropList.id];
      });
    }
  }

  public unregister(dropList: CdkDropList | CdkDropList[]) {
    if (Array.isArray(dropList)) {
      // dropList.forEach((child) => {
      //   const targetIndex = this.dropLists().findIndex(
      //     (ele) => ele.id === child.id
      //   );
      //   if (targetIndex !== -1) {
      //     this.dropLists().splice(targetIndex, 1);
      //   }
      // });
      this.dropLists.update((list) => {
        // 移除指定列表内元素
        for (const ele of dropList) {
          const targetIndex = list.findIndex((innerEle) => innerEle === ele.id);
          if (targetIndex !== -1) {
            list.splice(targetIndex, 1);
          }
        }
        return list;
      });
    } else {
      // const targetIndex = this.dropLists().findIndex(
      //   (ele) => ele.id === dropList.id
      // );
      // if (targetIndex !== -1) {
      //   this.dropLists().splice(targetIndex, 1);
      // }
      this.dropLists.update((list) => {
        // 移除指定元素
        return list.filter((ele) => ele !== dropList.id);
      });
    }
  }

  dragMoved(event: CdkDragMove<XzSafeAny>) {
    const elementFromPoint = this.document.elementFromPoint(
      event.pointerPosition.x,
      event.pointerPosition.y
    );

    if (!elementFromPoint) {
      this.currentHoverDropListId = undefined;
      return;
    }

    const dropList = elementFromPoint.classList.contains('cdk-drop-list')
      ? elementFromPoint
      : elementFromPoint.closest('.cdk-drop-list');

    if (!dropList) {
      this.currentHoverDropListId = undefined;
      return;
    }
    this.currentHoverDropListId = dropList.id;
    // console.log(this.currentHoverDropListId);
  }

  dragReleased(event: CdkDragRelease) {
    this.currentHoverDropListId = undefined;
  }

  isDropAllowed(drag: CdkDrag, drop: CdkDropList) {
    if (this.currentHoverDropListId == null) {
      return true;
    }
    return drop.id === this.currentHoverDropListId;
  }
}
