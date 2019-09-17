import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'gt-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Output() keywordChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() placeholder: string;
  constructor() {}
  ngOnInit() {}

  onKeywordChange(value: any) {
    this.keywordChange.emit(value.target.value);
  }
}
