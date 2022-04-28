import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnackComponent } from './snack/snack.component';
import { SnackPageComponent } from './snack-page/snack-page.component';
import { SnackListComponent } from './snack-list/snack-list.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    SnackComponent,
    SnackPageComponent,
    SnackListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    SnackPageComponent,
  ]
})
export class SnackModule { }
