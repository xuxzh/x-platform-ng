import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XzContainerWrapper } from 'x-lcdp/shared';
import { XzBaseDesignDirective } from 'x-lcdp/shared';

@Component({
  selector: 'xz-div',
  imports: [CommonModule, XzContainerWrapper],
  templateUrl: './div.html',
  styleUrl: './div.less',
  host: {
    class: 'bg-orange-300 block size-auto',
  },
})
export class XzDiv extends XzBaseDesignDirective {}
