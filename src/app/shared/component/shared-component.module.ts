import { NgModule } from '@angular/core';
import { NavigationModule } from './navigation/navigation.module';
import { PageHeaderModule } from './page-header/page-header.module';

const MODULES = [
    NavigationModule,
    PageHeaderModule
];

@NgModule({
    exports: MODULES
})
export class SharedComponentModule { }