import { Component, computed, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  XZ_DESIGN_COMPONENT_CONFIG,
  XzComponentConfig,
  XzDragDropService,
} from 'x-lcdp/core';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import {
  CdkDragMove,
  CdkDragRelease,
  CdkDropList,
  DragDropModule,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'xz-component-pool',
  imports: [CommonModule, NzCollapseModule, DragDropModule],
  templateUrl: './component-pool.html',
  styleUrl: './component-pool.less',
})
export class XzComponentPool implements OnInit {
  dragDropSer = inject(XzDragDropService);
  componentDatas = inject(XZ_DESIGN_COMPONENT_CONFIG);

  connectedList = computed(() => {
    const list = this.dragDropSer.dropLists() || [];
    console.log(list);
    return list;
  });

  ngOnInit() {
    console.log(this.componentDatas);
  }

  dragMoved(event: CdkDragMove<XzComponentConfig>) {
    this.dragDropSer?.dragMoved(event);
  }

  dragReleased(event: CdkDragRelease) {
    this.dragDropSer?.dragReleased(event);
  }
}
