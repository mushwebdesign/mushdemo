import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { LoginComponent } from './login/login.component';

import { CusttableComponent } from './custtable/custtable.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  // { path: 'login', component: LoginComponent },
  { path: '', component: HomeComponent },
  { path: 'Custtable', component: CusttableComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
