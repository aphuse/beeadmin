import { LayoutDefaultComponent } from './default/default.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';

const COMPONENTS = [
  LayoutDefaultComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [SharedModule],
  exports: [...COMPONENTS]
})
export class LayoutModule {}
