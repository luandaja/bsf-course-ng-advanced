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

  constructor() {}

  ngOnInit() {
  }

}
