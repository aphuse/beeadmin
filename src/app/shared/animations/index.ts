import {
  animation,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

export const beeAnimation = [
  trigger('slideInOut', [
    state(
      '1',
      style({
        height: '*',
        display: 'block'
      })
    ),
    state(
      '0',
      style({
        height: '0px',
        display: 'none'
      })
    ),
    transition('0 => 1', animate('1s ease-in')),
    transition('1 => 0', animate('1s ease-out'))
  ])
];
