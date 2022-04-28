import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './features/login/login-page/login-page.component';
import { LoginFormComponent } from './features/login/login-form/login-form.component';
import { AdminPageComponent } from './features/admin/admin-page/admin-page.component';
import { RequestsPageComponent } from './features/requests/requests-page/requests-page.component';
import { SnackPageComponent } from './features/snack/snack-page/snack-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {path:'login', component:LoginPageComponent},
  {path:'loginform', component:LoginFormComponent},
  {path:'home', component:AdminPageComponent},
  {path:'pedidos', component:RequestsPageComponent},
  {path:'lanches', component:SnackPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
