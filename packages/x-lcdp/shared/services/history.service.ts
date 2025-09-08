import { Injectable, signal, computed } from '@angular/core';
import { RhHistoryData } from 'x-lcdp/model';
import { uuid } from 'x-utils/core';

@Injectable()
export class XzHistoryService {
  maxHistorySize = 30;

  isLastHistory = computed(() => {
    return this.currentIndex() === 0 || this.historyDatas().length === 0;
  });

  isFirstHistory = computed(() => {
    return (
      this.currentIndex() === this.historyDatas().length - 1 ||
      this.historyDatas().length === 0
    );
  });

  currentIndex = signal(0);
  historyDatas = signal<RhHistoryData[]>([]);

  push(data: Pick<RhHistoryData, 'content' | 'delta'>) {
    const historyData: RhHistoryData = {
      id: uuid(),
      content: data.content,
      timestamp: Date.now(),
      delta: data.delta,
    };
    this.historyDatas.update((datas) => {
      let newDatas = [...datas];

      // 当已经撤销过之后，再进行操作，需要将过期的历史记录删除
      if (this.currentIndex() > 0) {
        newDatas = newDatas.slice(this.currentIndex());
        this.currentIndex.set(0);
      }

      newDatas = [historyData, ...newDatas];

      if (newDatas.length > this.maxHistorySize) {
        newDatas = newDatas.slice(0, this.maxHistorySize);
      }

      return newDatas;
    });
  }

  /** 撤销 */
  undo() {
    if (this.currentIndex() >= this.historyDatas()?.length) {
      return;
    }
    this.currentIndex.update((index) => index + 1);
    const taretHistory = this.historyDatas()[this.currentIndex()];
    return taretHistory;
  }

  /** 反撤销 */
  redo() {
    if (this.currentIndex() <= 0) {
      return;
    }
    this.currentIndex.update((index) => index - 1);
    const taretHistory = this.historyDatas()[this.currentIndex()];
    return taretHistory;
  }
}
