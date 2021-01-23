import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialButtonComponent } from './social-button/social-button.component';
import { WelcomeBannerComponent } from './welcome-banner/welcome-banner.component';
import { UiAvatarModule } from '@glotrix/ui/avatar';
import { UiSpinnerModule } from '@glotrix/ui/spinner';
import { UiSnackbarModule } from '@glotrix/ui/snackbar';
import { WelcomeCardComponent } from './welcome-card/welcome-card.component';
import { PlayerLoginComponent } from './player-login/player-login.component';
import { UiFormsModule } from '@glotrix/ui/forms';

@NgModule({
	imports: [CommonModule, UiAvatarModule, UiSpinnerModule, UiSnackbarModule, UiFormsModule],
	declarations: [SocialButtonComponent, WelcomeBannerComponent, WelcomeCardComponent, PlayerLoginComponent],
	exports: [SocialButtonComponent, WelcomeBannerComponent, WelcomeCardComponent, PlayerLoginComponent]
})
export class UiLoginModule { }
