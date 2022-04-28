import { SnackModule } from './snack/snack.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './login/login.module';
import { AdminModule } from './admin/admin.module';
import { RequestsModule } from './requests/requests.module';




@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    LoginModule,
    AdminModule,
    SnackModule,
    RequestsModule
  ]
})
export class FeaturesModule { }
