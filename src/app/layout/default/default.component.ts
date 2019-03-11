import { Component, OnInit, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import * as screenfull from 'screenfull';

@Component({
  selector: 'app-layout-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class LayoutDefaultComponent implements OnInit {

  isFullscreen = false;
  isHandset: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private _element: ElementRef<HTMLElement>,
    private breakpointObserver: BreakpointObserver,
  ) { }

  ngOnInit() {
  }

  toggleFullscreen() {
    if (screenfull.enabled) {
      screenfull.toggle();
      this.isFullscreen = !this.isFullscreen;
    }
  }

}
