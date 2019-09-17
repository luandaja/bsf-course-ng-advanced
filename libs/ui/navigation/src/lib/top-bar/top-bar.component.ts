import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavigationUser } from '../..';

@Component({
  selector: 'gt-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  @Input() isSidebarActive = false;
  @Output() isSidebarActiveChange = new EventEmitter<boolean>();
  @Input() userData: NavigationUser;
  @Output() logOut: EventEmitter<any> = new EventEmitter();

  ngOnInit() {}

  toggleSideBar() {
    this.isSidebarActive = !this.isSidebarActive;
    this.isSidebarActiveChange.emit(this.isSidebarActive);
  }

  onLogOut() {
    this.logOut.emit(null);
  }
}
