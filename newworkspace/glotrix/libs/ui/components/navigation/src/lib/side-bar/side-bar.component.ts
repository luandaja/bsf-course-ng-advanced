import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { LinkOption } from './linkOption';

@Component({
  selector: 'glotrix-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  @Input() linkOptions: LinkOption[];
  //@Input() isOpen: boolean;

  constructor() {}

  ngOnInit() {
  //  console.log("sidebar on init",this.isOpen);
  }

}
