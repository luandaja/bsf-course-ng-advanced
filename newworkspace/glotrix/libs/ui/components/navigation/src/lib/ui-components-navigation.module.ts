import { UiComponentsUngroupedModule } from '@glotrix/ui/components/ungrouped';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [CommonModule, RouterModule, NgbModule, UiComponentsUngroupedModule],
  declarations: [TopBarComponent],
  exports: [TopBarComponent]
})
export class UiNavigationModule {}
