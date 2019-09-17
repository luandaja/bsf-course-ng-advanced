import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'gt-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {
  @Input() page: number = 1;
  @Input() total: number;
  @Input() pageSize: number = 10;
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}
  totalPages() {
    return Math.ceil(this.total / this.pageSize);
  }

  pagesRange() {
    return this.range(1, this.totalPages() + 1);
  }

  prevPage() {
    return Math.max(1, this.page - 1);
  }

  nextPage() {
    return Math.min(this.totalPages(), this.page + 1);
  }

  onPageClicked(page: number) {
    this.pageChange.next(page);
  }

  range(start: number, stop: number, step = 1) {
    if (!stop) {
      start = 0;
      stop = start;
    }
    return Array.from(
      { length: Number((stop - start) / step) },
      (_, i) => start + i * step
    );
  }
}
