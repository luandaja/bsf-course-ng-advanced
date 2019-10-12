import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar/avatar.component';
import { AvatarsComponent } from './avatars/avatars.component';
import { AvatarSelectorComponent } from './avatar-selector/avatar-selector.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AvatarComponent, AvatarsComponent, AvatarSelectorComponent],
  exports: [AvatarComponent, AvatarsComponent, AvatarSelectorComponent]
})
export class UiAvatarModule {}
