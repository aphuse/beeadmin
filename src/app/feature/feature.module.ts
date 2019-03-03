import { NgModule } from '@angular/core';

import { FeatureRoutingModule } from './feature-routing.module';
import { SharedModule } from '@app/shared';
import { LayoutModule } from '@app/layout/layout.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    LayoutModule,
    FeatureRoutingModule
  ]
})
export class FeatureModule { }
