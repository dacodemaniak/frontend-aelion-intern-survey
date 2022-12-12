import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Forms UI
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ... MaterialUiModule.materialModules // ... SPREAD OPERATOR
  ]
})
export class MaterialUiModule {
  public static materialModules = [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatMenuModule
  ]
}
