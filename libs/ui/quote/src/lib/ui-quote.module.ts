import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuoteComponent } from './quote/quote.component';
import { UiAvatarModule } from '@glotrix/ui/avatar';

@NgModule({
	imports: [CommonModule, UiAvatarModule],
	declarations: [QuoteComponent],
	exports: [QuoteComponent]
})
export class UiQuoteModule { }
