import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'gt-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  @Output() counterChange = new EventEmitter<number>();
  @Input() counter = 1;

  constructor() { }

  ngOnInit() { }

  add(): void {
    this.counter++;
    this.counterChange.emit(this.counter);
  }

  substract() {
    if (this.counter === 1)
      return;
    this.counter--;
    this.counterChange.emit(this.counter);
  }
}
