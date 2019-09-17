import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialButtonComponent } from './social-button/social-button.component';
import { WelcomeBannerComponent } from './welcome-banner/welcome-banner.component';
import { UiAvatarModule } from '@glotrix/ui/avatar';

@NgModule({
  imports: [CommonModule, UiAvatarModule],
  declarations: [SocialButtonComponent, WelcomeBannerComponent],
  exports: [SocialButtonComponent, WelcomeBannerComponent]
})
export class UiLoginModule { }
