import { Component, OnInit, Input } from '@angular/core';
import { LinkOption } from '@glotrix/ui/navigation';
import startCase from 'lodash.startcase';
import { appModules } from '../modules.routes';

@Component({
  selector: 'gt-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.scss']
})
export class DashboardLayoutComponent implements OnInit {
  protected options: LinkOption[] = appModules.map(module => ({
    Url: module.path,
    Text: startCase(module.path)
  }));

  protected isSidebarActive: Boolean = true;

  constructor() {}

  ngOnInit() {}
}
