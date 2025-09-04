import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { XzContainerWrapper } from 'x-lcdp/shared';
import { XzBaseDesignDirective } from 'x-lcdp/shared';

@Component({
  selector: 'xz-div',
  imports: [CommonModule, XzContainerWrapper],
  templateUrl: './div.html',
  styleUrl: './div.less',
})
export class XzDiv extends XzBaseDesignDirective {}
