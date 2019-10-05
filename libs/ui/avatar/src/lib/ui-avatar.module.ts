import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvatarComponent } from './avatar/avatar.component';
import { AvatarsComponent } from './avatars/avatars.component';

@NgModule({
  imports: [CommonModule],
  declarations: [AvatarComponent, AvatarsComponent],
  exports: [AvatarComponent, AvatarsComponent]
})
export class UiAvatarModule {}
