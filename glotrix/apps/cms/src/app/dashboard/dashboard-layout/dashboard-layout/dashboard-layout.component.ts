import { Component, OnInit, Input } from '@angular/core';
import { LinkOption } from '@glotrix/ui/navigation';
import { appModulesAsLinkOption } from '../modules.routes';

@Component({
  selector: 'gt-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {
  protected options: LinkOption[] = appModulesAsLinkOption;

  protected isSidebarActive: Boolean = true;

  constructor() {}

  ngOnInit() {}
}
