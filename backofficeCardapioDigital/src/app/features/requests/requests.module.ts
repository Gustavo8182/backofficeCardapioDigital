import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestsComponent } from './requests/requests.component';
import { RequestsPageComponent } from './requests-page/requests-page.component';
import { RequestsListComponent } from './requests-list/requests-list.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    RequestsComponent,
    RequestsPageComponent,
    RequestsListComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    RequestsPageComponent
  ]
})
export class RequestsModule { }
