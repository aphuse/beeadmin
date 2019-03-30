import {
  animation,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations';

export const navAnimation = [
  trigger('rotate90', [
    state('0', style({
      transform: 'rotate(0)',
    })),
    state('1', style({
      transform: 'rotate(90deg)',
    })),
    transition('0 => 1', animate('0.2s ease-in')),
    transition('1 => 0', animate('0.2s ease-out'))
  ]),
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
    transition('0 => 1', animate('0.2s ease-in')),
    transition('1 => 0', animate('0.2s ease-out'))
  ])
];
