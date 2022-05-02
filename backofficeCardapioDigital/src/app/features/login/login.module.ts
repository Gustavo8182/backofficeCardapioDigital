import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { LoginPageComponent } from './login-page/login-page.component';
import { LoginComponent } from './login/login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginServiceService } from './service/login-service.service';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    LoginPageComponent,
    LoginFormComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule


  ],providers:[
    LoginServiceService
  ]
})
export class LoginModule { }
