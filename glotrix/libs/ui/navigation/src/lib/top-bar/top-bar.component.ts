import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LinkOption } from '../linkOption';

@Component({
  selector: 'gt-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  @Input() isSidebarActive = false;
  @Output() isSidebarActiveChange = new EventEmitter<boolean>();

  @Input() linkOptions: LinkOption[];

  ngOnInit() {}

  toggleSideBar() {
    this.isSidebarActive = !this.isSidebarActive;
    this.isSidebarActiveChange.emit(this.isSidebarActive);
  }
}
