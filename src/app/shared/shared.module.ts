import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialUiModule } from '../material-ui/material-ui.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { 
  MatMomentDateModule,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MAT_MOMENT_DATE_FORMATS
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  
} from '@angular/material/core';

import 'moment/locale/fr';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MaterialUiModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatMomentDateModule
  ],
  providers: [
    {
      provide: MAT_DATE_LOCALE, useValue: 'fr-FR'
    },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [
        MAT_DATE_LOCALE,
        MAT_MOMENT_DATE_ADAPTER_OPTIONS
      ]
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: MAT_MOMENT_DATE_FORMATS
    }
  ]
})
export class SharedModule { }
