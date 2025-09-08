import { InjectionToken, Type } from '@angular/core';
import { XzExpand, XzSelectOption } from 'x-base/model';
import { XzSafeAny } from 'x-base/model';

/**
 * 设计时组件配置
 */
export const XZ_DESIGN_COMPONENT_CONFIG = new InjectionToken<
  XzComponentGroupConfig[]
>('XZ_DESIGN_CONFIG');

/**
 * 运行时组件配置
 */
export const XZ_RUNTIME_COMPONENT_CONFIG = new InjectionToken<
  XzComponentGroupConfig[]
>('XZ_RUNTIME_CONFIG');

export interface XzComponentGroupConfig extends XzExpand, XzSelectOption {
  children: XzComponentConfig[];
}

export interface XzComponentConfig extends XzSelectOption {
  /** 对应组件 */
  component: Type<XzSafeAny> | null;
  compType: 'container' | 'general' | 'input';
  resourceType: 'component' | 'template';
  registration?: RhComponentRegistration;
}

/** 组件描述信息 */
export interface RhComponentRegistration {
  /** 事件列表 */
  events?: XzSafeAny;
  /** 方法列表 */
  methods?: XzSafeAny;
  /** 附加功能列表 */
  addons?: XzSafeAny;
}
