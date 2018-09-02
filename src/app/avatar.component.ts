import { Component } from '@angular/core';

@Component({
  selector: 'app-avatar',
  template: ``,
  styles: [`
    :host {
      display: block;
      height: 150px;
      width: 150px;
      background: url("assets/avatar_resized.jpg") no-repeat center #666666;
      background-size: cover;
      border-radius: 50%;
      box-shadow: white 0 0 0 3px;
    }
  `]
})
export class AvatarComponent {

}
