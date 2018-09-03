import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `
    <div class="avatar-wrap">
      <app-avatar></app-avatar>
    </div>
    <div class="text-wrap">
      <p>HI! I'M <span style="font-weight: 500; color: steelblue">LUCAS</span></p>
      <p>{{"Senior web front-end engineer & geek" | uppercase}}</p>
      <p>{{"Keep in touch" | uppercase}}</p>
    </div>
    <div class="link-wrap">
      <a class="link" href="https://www.linkedin.com/in/fengxuprofile/" target="_blank"><i class="anticon anticon-linkedin"></i></a>
      <a class="link" href="https://github.com/ngfx/" target="_blank"><i class="anticon anticon-github"></i></a>
      <a class="link" href="mailto:me@fengxu.me"><i class="anticon anticon-mail"></i></a>
    </div>
  `,
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
}
