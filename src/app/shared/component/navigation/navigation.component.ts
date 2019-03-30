import { Component, Input } from '@angular/core';
import { Navigation } from './navigation.model';

@Component({
  selector: 'app-navigation',
  templateUrl: 'navigation.component.html',
  styleUrls: ['navigation.component.scss'],
})
export class NavigationComponent {
  @Input() nodes: Navigation[];
}
