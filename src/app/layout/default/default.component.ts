import { Component, OnInit, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import * as screenfull from 'screenfull';

@Component({
  selector: 'app-layout-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class LayoutDefaultComponent implements OnInit {
  navigations = [
    {
      title: '导航',
      icon: 'home',
    },
    {
      title: '系统管理',
      icon: 'settings',
      children: [
        {
          title: '用户管理',
          url: '/user',
          children: [
            {
              title: '添加',
              url: '/user/add'
            },
            {
              title: '修改',
              url: '/user/modify'
            }
          ]
        },
        {
          title: '菜单管理',
          url: '/menus'
        },
        {
          title: '菜单管理',
          url: '/menus'
        },
        {
          title: '菜单管理',
          url: '/menus'
        },
        {
          title: '菜单管理',
          url: '/menus'
        },
        {
          title: '菜单管理',
          url: '/menus'
        },
        {
          title: '菜单管理',
          url: '/menus'
        },
        {
          title: '菜单管理',
          url: '/menus'
        },
        {
          title: '菜单管理',
          url: '/menus'
        },
        {
          title: '菜单管理',
          url: '/menus'
        },
        {
          title: '菜单管理',
          url: '/menus'
        },
        {
          title: '菜单管理',
          url: '/menus'
        },
        {
          title: '菜单管理',
          url: '/menus'
        }
      ]
    },
    {
      title: '业务管理',
      icon: 'computer',
    },
  ];
  isFullscreen = false;
  isHandset: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map(result => result.matches));

  constructor(
    private _element: ElementRef<HTMLElement>,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit() {}

  toggleFullscreen() {
    if (screenfull.enabled) {
      screenfull.toggle();
      this.isFullscreen = !this.isFullscreen;
    }
  }
}
