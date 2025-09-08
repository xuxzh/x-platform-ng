import { v4 as uuidV4 } from 'uuid';
/**
 * 基于v4(随机数)生成的uuid
 * @param len 截断长度，请谨慎使用，截断后无法保证唯一性
 * @returns uuid
 */
export function uuid(len?: number): string {
  if (len && len > 0 && len <= 36) {
    return uuidV4().replace(/-/g, '').substring(0, len);
  }
  return uuidV4();
}
