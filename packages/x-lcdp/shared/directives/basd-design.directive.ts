import { Directive } from '@angular/core';
import { XzNodeSchema } from 'x-lcdp/model';

@Directive()
export class XzBaseDesignDirective {
  _nodeSchema!: XzNodeSchema;
}
