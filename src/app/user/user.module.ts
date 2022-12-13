import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { SharedModule } from '../shared/shared.module';
import { appInit } from '../core/services/app-initializer.service';



@NgModule({
  declarations: [
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  providers: [
    appInit
  ]
})
export class UserModule { }
