import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'glotrix-col',
  template:'<ng-content></ng-content>',
  styleUrls: ['./col.component.scss'],
  host: { '[class]': 'className' },
})
export class ColComponent implements OnInit {
  @Input() xs: number;
  @Input() sm: number;
  @Input() md: number;
  @Input() lg: number;
  @Input() xl: number;

  className : string = '';
  sizes:  any ={
    'xs':'col',
    'sm':'col-sm',
    'md':'col-md',
    'lg':'col-lg',
    'xl':'col-xl'
  };

  ngOnInit() {
    this.setClassSelectors();
  }

  private setClassSelectors(){
    const selectors = this.getSelectors();
    for (let selector of selectors) {
      this.className += this.getClass(selector.id, selector.value);
    }
  }

  private getSelectors() {
    const selectors : { id: string, value: number } = [];
    selectors.push({id:'xs',value: this.xs});
    selectors.push({id:'sm',value: this.sm});
    selectors.push({id:'md',value: this.md});
    selectors.push({id:'lg',value: this.lg});
    selectors.push({id:'xl',value: this.xl});
    return selectors.filter(selector => selector.value !== undefined);
  }

  private getClass(id: string, value: number) : string {
    return ` ${this.sizes[id]}-${value}`;
  }

}
