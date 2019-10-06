import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
	imports: [CommonModule, ToastrModule.forRoot()],
	declarations: [],
	exports: []
})
export class UiSnackbarModule {

}
