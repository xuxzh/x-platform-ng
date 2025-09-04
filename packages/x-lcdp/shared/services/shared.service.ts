import { inject, Injectable } from '@angular/core';
import { XZ_DESIGN_COMPONENT_CONFIG, XzComponentConfig } from 'x-lcdp/core';

@Injectable({
  providedIn: 'root',
})
export class XzSharedService {
  componetDatas = inject(XZ_DESIGN_COMPONENT_CONFIG);

  getTargetComponent(compCode: string): XzComponentConfig | null {
    const flatDatas = this.componetDatas.flatMap((item) => item.children);
    const targetComp = flatDatas.find((ele) => ele.code === compCode);
    return targetComp || null;
  }
}
