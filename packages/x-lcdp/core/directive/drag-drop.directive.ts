import {
  AfterViewInit,
  Directive,
  effect,
  inject,
  input,
  viewChildren,
} from '@angular/core';
import {
  CdkDrag,
  CdkDragMove,
  CdkDragRelease,
  CdkDropList,
} from '@angular/cdk/drag-drop';
import { XzNodeSchema } from 'x-lcdp/model';
import { XzDragDropService } from '../service/drag-drop.service';
import { XzSafeAny } from 'x-base/model';

@Directive()
export class XzDragDropDirective {
  dragDropSer = inject(XzDragDropService);
  dropList = inject(CdkDropList);

  ngAfterViewInit() {
    this.dragDropSer?.register(this.dropList as CdkDropList<XzSafeAny>);
  }

  allowDropPredicate = (drag: CdkDrag, drop: CdkDropList) => {
    return this.dragDropSer?.isDropAllowed(drag, drop) || false;
  };

  dragMoved(event: CdkDragMove<XzNodeSchema>) {
    this.dragDropSer?.dragMoved(event);
  }

  dragReleased(event: CdkDragRelease) {
    this.dragDropSer?.dragReleased(event);
  }
}
