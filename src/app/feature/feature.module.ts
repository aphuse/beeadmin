import { NgModule } from '@angular/core';

import { FeatureRoutingModule } from './feature-routing.module';
import { SharedModule } from '@app/shared';
import { LayoutModule } from '@app/layout/layout.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './passport/login/login.component';

@NgModule({
  declarations: [
    DashboardComponent,
    LoginComponent,
  ],
  imports: [
    SharedModule,
    LayoutModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule { }
