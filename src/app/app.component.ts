import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="card" [@enter]="'in'" [@side]="side">
      <app-profile class="card-front" (switchSide)="onSwitchSide()"></app-profile>
      <app-wechat class="card-back" (switchSide)="onSwitchSide()"></app-wechat>
    </div>
  `,
  animations: [
    trigger('enter', [
      state('in', style({transform: 'translateY(0)'})),
      transition('void => *', [
        style({transform: 'translateY(-120%)'}),
        animate('2s cubic-bezier(0.2,1,0.3,1)')
      ])
    ]),
    trigger('side', [
      state('front', style({transform: 'rotateY(0deg)'})),
      state('back', style({transform: 'rotateY(180deg)'})),
      transition('* => *', [
        animate('2s cubic-bezier(0.2,1,0.3,1)')
      ])
    ])
  ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  side: 'front' | 'back' = 'front';

  onSwitchSide(): void {
    this.side = this.side === 'front' ? 'back' : 'front';
  }
}
