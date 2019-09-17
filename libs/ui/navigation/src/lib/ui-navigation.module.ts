import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { UiAvatarModule } from '@glotrix/ui/avatar';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, UiAvatarModule, RouterModule],
  declarations: [TopBarComponent, SideBarComponent],
  exports: [TopBarComponent, SideBarComponent]
})
export class UiNavigationModule {}
