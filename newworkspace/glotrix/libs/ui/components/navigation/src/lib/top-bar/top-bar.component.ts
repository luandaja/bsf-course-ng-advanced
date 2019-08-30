import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'glotrix-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  ngOnInit() {
  }

  toggleSideBar(){
    console.log("toggle");
  }
}
