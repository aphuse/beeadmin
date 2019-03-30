import { Input, Component } from '@angular/core';
import { Navigation } from '../navigation.model';
import { navAnimation } from '../animations';

@Component({
  selector: 'app-nav-item',
  templateUrl: 'nav-item.component.html',
  styleUrls: ['nav-item.component.scss'],
  animations: navAnimation,
})
export class NavItemComponent {
  @Input() node: Navigation;
  isExpend = false;

  doClick() {
    this.isExpend = !this.isExpend;
  }
}
