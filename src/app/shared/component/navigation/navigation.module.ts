import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material';
import { NavItemComponent } from './nav-item/nav-item.component';
import { NavigationComponent } from './navigation.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MatIconModule,
    ],
    declarations: [
        NavItemComponent,
        NavigationComponent,
    ],
    exports: [
        NavigationComponent
    ]
})
export class NavigationModule {}