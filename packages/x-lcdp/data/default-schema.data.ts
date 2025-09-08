import { XzPageContaienr, XzNodeSchema } from 'x-lcdp/model';

export const JSON_SCHEMA_ROOT_KEY = 'PAGE_KEY';
export const MAIN_PAGE_KEY = 'MAIN_PAGE';
/** 默认PageSchema */
export function getDefaultPageSchema(): XzPageContaienr {
  return {
    pages: [
      {
        key: MAIN_PAGE_KEY,
        name: 'mainPage',
        displayName: '主页',
        children: [],
        parent: JSON_SCHEMA_ROOT_KEY,
        compCode: 'MAIN',
      } as unknown as XzNodeSchema,
    ],
  } as unknown as XzPageContaienr;
}

/**
 * 需要忽略的状态字段列表，如select,expand,check
 */
export const OMIT_FIELD_DATAS = ['select', 'expand', 'check'];
