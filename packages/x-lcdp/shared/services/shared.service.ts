import { inject, Injectable, signal } from '@angular/core';
import { XzNodeSchema, XzPageContaienr } from 'x-lcdp/model';
import * as jsondiffpatch from 'jsondiffpatch';
import { getDefaultPageSchema } from 'x-lcdp/data';
import { XzHistoryService } from './history.service';

@Injectable()
export class XzSharedService {
  historySer = inject(XzHistoryService);

  isSaved = signal(true);
  disableHistoryRecord = false;
  isFirstRender = true;

  /** 页面json
   * @description 全量page schema json
   */
  pageContainer = signal<XzPageContaienr>(getDefaultPageSchema(), {
    equal: (a, b) => {
      if (a === b) {
        console.warn('更新json没有更新引用,可能导致保存变更检测失效！');
      }
      const diff = jsondiffpatch.diff(a, b);
      const isEqual = !diff;

      if (!this.disableHistoryRecord) {
        this.historySer?.push({
          content: b,
          delta: diff,
        });
      }

      if (!isEqual && !this.isFirstRender) {
        this.isSaved.set(false);
      }
      this.isFirstRender = false;
      return isEqual;
    },
  });

  /**
   * 整体替换或者更新page schema
   * @description 传入对象时使用set方式整体替换，此时会刷新当前正在编辑的页面,
   * 传入方式时使用update更新，不会刷新当前正在编辑的页面
   * 使用此方法更新pageSchema会触发**保存**状态变更
   */
  updatePageSchema(node: XzPageContaienr): void;
  updatePageSchema(fn: (page: XzPageContaienr) => XzPageContaienr): void;

  updatePageSchema(
    argOrFn: XzPageContaienr | ((page: XzPageContaienr) => XzPageContaienr)
  ) {
    if (typeof argOrFn === 'object') {
      this.pageContainer.set({ ...argOrFn });
    } else {
      this.pageContainer.update(argOrFn);
    }
  }
}
