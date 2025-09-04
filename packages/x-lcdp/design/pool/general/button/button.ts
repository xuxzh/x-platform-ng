import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'xz-button',
  imports: [CommonModule, NzButtonModule, NzIconModule],
  templateUrl: './button.html',
  styleUrl: './button.less',
})
export class XzButton {
  rhContent = input('按钮');
}
