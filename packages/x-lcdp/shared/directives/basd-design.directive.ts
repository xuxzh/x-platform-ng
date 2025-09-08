import { Directive, effect, input, OnInit } from '@angular/core';
import { XzNodeSchema } from 'x-lcdp/model';

@Directive()
export class XzBaseDesignDirective {
  rhNodeSchema = input<XzNodeSchema>();
  _nodeSchema!: XzNodeSchema;

  constructor() {
    effect(() => {
      if (this.rhNodeSchema()) {
        this._nodeSchema = this.rhNodeSchema() as XzNodeSchema;
      }
    });
  }
}
