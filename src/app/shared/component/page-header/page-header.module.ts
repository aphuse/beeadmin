import { NgModule } from '@angular/core';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { PageHeaderComponent } from './page-header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        BreadcrumbComponent,
        PageHeaderComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        BreadcrumbComponent,
        PageHeaderComponent
    ]
})
export class PageHeaderModule {}