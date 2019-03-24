import { Input, Component } from '@angular/core';
import { Navigation } from '@app/core';
import { beeAnimation } from '@app/shared';

@Component({
  selector: 'app-nav-item',
  templateUrl: 'nav-item.component.html',
  styleUrls: ['nav-item.component.scss'],
  animations: beeAnimation,
})
export class NavItemComponent {
  @Input() node: Navigation;
  isExpend = false;

  doClick() {
    this.isExpend = !this.isExpend;
  }
}
