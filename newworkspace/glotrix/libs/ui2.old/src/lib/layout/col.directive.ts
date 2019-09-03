import { Directive } from '@angular/core';

const inputs = ['gtCol', 'gtCol.sm', 'gtCol.md', 'gtCol.lg'];
const selector = `
  [gtCol], [gtCol.sm], [gtCol.md], [gtCol.lg]
`;

@Directive({ inputs, selector })
export class ColDirective {
  constructor() {
    console.log(this);
  }
}
