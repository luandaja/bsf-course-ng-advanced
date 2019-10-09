import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PosterCardComponent } from './poster-card/poster-card.component';
import { UiAvatarModule } from '@glotrix/ui/avatar';


@NgModule({
	imports: [CommonModule, UiAvatarModule],
	declarations: [PosterCardComponent],
	exports: [PosterCardComponent]
})
export class UiPosterCardModule { }
