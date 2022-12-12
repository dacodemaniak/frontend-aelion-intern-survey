import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PoeRoutingModule } from './poe-routing.module';
import { PoeListComponent } from './components/poe-list/poe-list.component';
import { PoeDetailComponent } from './components/poe-detail/poe-detail.component';
import { PoeFormComponent } from './components/poe-form/poe-form.component';


@NgModule({
  declarations: [
    PoeListComponent,
    PoeDetailComponent,
    PoeFormComponent
  ],
  imports: [
    CommonModule,
    PoeRoutingModule
  ]
})
export class PoeModule { }
