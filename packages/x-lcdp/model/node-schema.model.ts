import { XzSafeAny } from 'x-base/model';

export interface XzNodeSchema {
  /** 唯一键值 */
  key: string;
  code: string;
  name: string;
  /** 组件编码 */
  compCode: string;
  'x-prop'?: Record<string, XzSafeAny>;
  'x-style'?: Record<string, XzSafeAny>;
  'x-class'?: string[];
  'x-event'?: Record<string, XzSafeAny>;
  children?: XzNodeSchema[];
}
