import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-profile [@enter]="'in'"></app-profile>
  `,
  animations: [
    trigger('enter', [
      state('in', style({transform: 'translateY(0)'})),
      transition('void => *', [
        style({transform: 'translateY(-100%)'}),
        animate('2s cubic-bezier(0.2,1,0.3,1)')
      ])
    ])
  ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
}
