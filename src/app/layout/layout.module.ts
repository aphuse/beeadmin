import { LayoutDefaultComponent } from './default/default.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared';
import { NavigationComponent } from './default/navigation/navigation.component';
import { NavItemComponent } from './default/navigation/nav-item/nav-item.component';

const COMPONENTS = [
  LayoutDefaultComponent,
  NavigationComponent,
  NavItemComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [SharedModule],
  exports: [...COMPONENTS]
})
export class LayoutModule {}
