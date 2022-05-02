import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnackComponent } from './snack/snack.component';
import { SnackPageComponent } from './snack-page/snack-page.component';
import { SnackListComponent } from './snack-list/snack-list.component';
import { SharedModule } from '../../shared/shared.module';
import { AdminModule } from '../admin/admin.module';
import { SnackFormComponent } from './snack-form/snack-form.component';



@NgModule({
  declarations: [
    SnackComponent,
    SnackPageComponent,
    SnackListComponent,
    SnackFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminModule
  ],
  exports:[
    SnackPageComponent,
  ]
})
export class SnackModule { }
