import { trigger } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-profile></app-profile>
  `,
  animations: [],
  styles: [`
    :host {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      height: 100vh;
      width: 100vw;
      background: url("assets/bg_blur.jpg") no-repeat center #666666;
      background-size: cover;
      overflow: auto;
    }
  `]
})
export class AppComponent {
}
