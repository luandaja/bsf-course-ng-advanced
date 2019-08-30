import { Component, OnInit, Input } from '@angular/core';
import { LinkOption } from '../side-bar/linkOption';

@Component({
  selector: 'glotrix-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  isCollapsed = true;

  @Input() linkOptions: LinkOption[];

  ngOnInit() {
  }

  toggleSideBar(){
    this.isCollapsed = !this.isCollapsed;
    console.log("open. isOpen:",this.isCollapsed);
  }
}
