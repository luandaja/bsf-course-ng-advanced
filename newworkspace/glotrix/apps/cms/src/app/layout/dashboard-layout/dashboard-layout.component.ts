import { LinkOption } from './../../../../../../libs/ui/components/navigation/src/lib/side-bar/linkOption';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'glotrix-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {
  options: LinkOption[] = [
    { Text: "Products", Url: "/product" },
    { Text: "Analytics", Url: "/profile" },
    { Text: "Profile", Url: "/product" },
    { Text: "Sold Products", Url: "/profile" }
  ]
  constructor() { }

  ngOnInit() {
  }

}
