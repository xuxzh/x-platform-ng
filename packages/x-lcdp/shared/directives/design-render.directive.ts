import {
  Directive,
  effect,
  inject,
  input,
  Type,
  ViewContainerRef,
} from '@angular/core';
import { XzNodeSchema } from 'x-lcdp/model';
import { XzDesignService } from '../services';
import { XzSafeAny } from 'x-base/model';

@Directive({
  selector: '[xzDesignRender]',
})
export class XzDesignRenderDirective {
  xzSchema = input.required<XzNodeSchema>();

  containerRef = inject(ViewContainerRef);
  designSer = inject(XzDesignService);

  constructor() {
    effect(() => {
      const schema = this.xzSchema();
      this.render(schema);
    });
  }

  render(schema: XzNodeSchema) {
    this.containerRef.clear();
    const targetComp = this.designSer?.getTargetComponent(schema.compCode);
    if (!schema?.compCode || !targetComp) {
      console.error(`该模型${schema.compCode}没有关联组件实例，渲染已终止!`);
      return;
    }
    if (!targetComp.component) {
      //   MsgHelper.ShowErrorModal(
      //     `模型(${targetComp.name})没有设置对应的component类，渲染已终止！`
      //   );
      return;
    }
    try {
      const componentRef = this.containerRef.createComponent(
        targetComp.component as Type<XzSafeAny>
      );
      // 属性配置
      const defaultCompConfig = {};
      let compConfig = schema?.['x-prop'] || {};
      // json中的属性配置优先级大于默认的属性配置
      if (defaultCompConfig) {
        compConfig = { ...defaultCompConfig, ...compConfig };
      }
      const componentInstance = componentRef.instance;
      // 所有的组件都需要设置`_nodeSchema`属性

      (componentRef.instance as Record<string, XzSafeAny>)['_nodeSchema'] =
        schema;
      Object.entries(compConfig).forEach(([key, value]) => {
        if (key.startsWith('rh')) {
          if (Object.hasOwnProperty.call(componentInstance, key)) {
            componentRef.setInput(key, value);
          } else {
            console.warn(
              `JsonSchma中的属性${key}没有在组件${targetComp.name}中定义，已忽略赋值，请检查后删除`
            );
          }
        } else {
          componentInstance[key] = value;
        }
      });
    } catch (error) {
      throw new Error(
        `组件【${targetComp.name}_${targetComp.name}】渲染发生错误:${error}`
      );
    }
  }
}
