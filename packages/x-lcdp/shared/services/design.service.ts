import { computed, inject, Injectable } from '@angular/core';
import {
  XZ_DESIGN_COMPONENT_CONFIG,
  XzComponentConfig,
  XzJsonSchemaHelper,
} from 'x-lcdp/core';
import { XzSharedService } from './shared.service';
import { XzNodeSchema, XzPageContaienr } from 'x-lcdp/model';
import { uuid } from 'x-utils/core';
import { MAIN_PAGE_KEY } from 'x-lcdp/data';

@Injectable()
export class XzDesignService {
  componetDatas = inject(XZ_DESIGN_COMPONENT_CONFIG);
  sharedSer = inject(XzSharedService);

  get pageContainer() {
    return this.sharedSer.pageContainer;
  }

  pageSchema = computed(() => {
    return (
      this.pageContainer().pages?.find((page) => page.key === MAIN_PAGE_KEY) ||
      ({} as XzNodeSchema)
    );
  });

  initPageContainer(pageSchema: XzPageContaienr) {
    this.sharedSer.pageContainer.set(pageSchema);
  }

  /**
   * 更新页面schema，会触发页面的未保存提示
   * @param argOrFn
   * @returns
   */
  updatePageContainer(
    argOrFn: XzPageContaienr | ((page: XzPageContaienr) => XzPageContaienr)
  ) {
    return this.sharedSer.updatePageSchema(argOrFn as XzPageContaienr);
  }

  getTargetComponent(compCode: string): XzComponentConfig | null {
    const flatDatas = this.componetDatas.flatMap((item) => item.children);
    const targetComp = flatDatas.find((ele) => ele.code === compCode);
    return targetComp || null;
  }

  replaceSchemaNode(node: XzNodeSchema, pageSchema: XzPageContaienr) {
    // return this.sharedSer.replaceSchemaNode(originPageSchema, nodeSchema);
  }

  componentDropped(
    dragData: XzComponentConfig,
    container: XzNodeSchema,
    index: number
  ) {
    const compKey = uuid();
    const compSchema: XzNodeSchema = {
      key: compKey,
      code: dragData.code,
      name: dragData.name,
      compCode: dragData.code,
      parentKey: container.key,
    };
    if (dragData.compType === 'container') {
      compSchema.children = [];
    }
    container.children?.splice(index, 0, compSchema);
    this.updatePageContainer((page) => {
      const newPage = XzJsonSchemaHelper.replaceSchemaNode(container, page);
      return newPage;
    });
  }
}
