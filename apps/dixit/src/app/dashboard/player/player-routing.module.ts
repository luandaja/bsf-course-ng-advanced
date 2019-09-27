import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HandComponent } from './hand/hand.component';


const routes: Routes = [
	{ path: '', component: HandComponent },
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class PlayerRoutingModule { }
