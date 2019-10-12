import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialButtonComponent } from './social-button/social-button.component';
import { WelcomeBannerComponent } from './welcome-banner/welcome-banner.component';
import { UiAvatarModule } from '@glotrix/ui/avatar';
import { WelcomeCardComponent } from './welcome-card/welcome-card.component';

@NgModule({
  imports: [CommonModule, UiAvatarModule],
  declarations: [SocialButtonComponent, WelcomeBannerComponent, WelcomeCardComponent],
  exports: [SocialButtonComponent, WelcomeBannerComponent, WelcomeCardComponent]
})
export class UiLoginModule { }
