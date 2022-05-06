import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { NgxEchartsModule } from 'ngx-echarts';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



const materialModules = [
  MatButtonModule,
  MatDividerModule,
  MatCheckboxModule,
  MatProgressSpinnerModule,
  MatTableModule,
  MatTabsModule,
  MatCardModule,
  MatProgressBarModule,
  MatSidenavModule,
  MatListModule,
  MatFormFieldModule,
  MatIconModule
];
const components = [
  HeaderComponent

];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    NgxEchartsModule,
    HttpClientModule,
    ...materialModules

  ],
  exports:[
    NgxEchartsModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ...materialModules,
    ...components

  ]
})
export class SharedModule { }
