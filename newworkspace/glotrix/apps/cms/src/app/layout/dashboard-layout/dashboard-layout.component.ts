import { LinkOption } from './../../../../../../libs/ui/components/navigation/src/lib/side-bar/linkOption';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'glotrix-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {
  options: LinkOption[] = [
    { Text: "Products", Url: "dashboard/product" },
    { Text: "Analytics", Url: "dashboard/profile" },
    { Text: "Profile", Url: "dashboard/product" },
    { Text: "Sold Products", Url: "dashboard/profile" }
  ]
  constructor() { }

  ngOnInit() {
  }

}
