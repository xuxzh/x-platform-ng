import { XzSafeAny } from 'x-base/model';

/**
 * 节点Json
 */
export interface XzNodeSchema {
  /** 唯一键值 */
  key: string;
  code: string;
  name: string;
  /** 组件编码 */
  compCode: string;
  parentKey: string;
  /** 对应页面的key值 */
  pageKey?: string;
  'x-prop'?: Record<string, XzSafeAny>;
  'x-style'?: Record<string, XzSafeAny>;
  'x-class'?: string[];
  'x-event'?: Record<string, XzSafeAny>;
  children?: XzNodeSchema[];
}

/**
 * 某个页面的json
 */
export interface XzPageSchema extends XzNodeSchema {
  pageType: 'main' | 'sub';
}

/** 页面整体json */
export interface XzPageContaienr {
  version?: string;
  pages: XzPageSchema[];
}
