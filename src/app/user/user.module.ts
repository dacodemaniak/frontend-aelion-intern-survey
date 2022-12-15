import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { SharedModule } from '../shared/shared.module';
import { appInit } from '../core/services/app-initializer.service';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    LoginFormComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  providers: [
    appInit
  ]
})
export class UserModule { }
