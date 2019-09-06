import { Component, OnInit, Input } from '@angular/core';
import { LinkOption } from '@glotrix/ui/navigation';

@Component({
  selector: 'gt-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {
  protected options: LinkOption[] = [
    { Text: 'Products', Url: 'product-manager' },
    { Text: 'Add Product', Url: 'product' },
    { Text: 'Analytics', Url: 'analytics' },
    { Text: 'Profile', Url: 'profile' },
    { Text: 'Sold Products', Url: 'sold-products' }
  ];

  protected isSidebarActive: Boolean = true;

  constructor() { }

  ngOnInit() { }
}
