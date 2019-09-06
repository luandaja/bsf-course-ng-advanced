import { Component, OnInit, Input } from '@angular/core';
import { LinkOption } from '../linkOption';

@Component({
  selector: 'gt-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {
  @Input() linkOptions: LinkOption[];
  @Input() isSidebarActive = false;

  constructor() {}

  ngOnInit() {}
}
