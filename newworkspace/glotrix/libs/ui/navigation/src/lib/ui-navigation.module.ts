import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  imports: [CommonModule],
  declarations: [TopBarComponent, SideBarComponent],
  exports: [TopBarComponent]
})
export class UiNavigationModule {}
