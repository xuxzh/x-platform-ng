import { XzSafeAny } from 'x-base/model';
import { XzPageContaienr } from './schema.model';

export interface RhHistoryData {
  id: string;
  content: XzPageContaienr;
  timestamp: number;
  delta: XzSafeAny;
}
