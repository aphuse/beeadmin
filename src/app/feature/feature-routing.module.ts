import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutDefaultComponent } from '@app/layout/default/default.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './passport/login/login.component';

const routes: Routes = [
  {
    path: '', component: LayoutDefaultComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent, data: { title:'仪表盘'} },
    ]
  },
  {
    path: 'login', component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
