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
      <p style="color: steelblue">{{"Keep in touch" | uppercase}}</p>
    </div>
    <div class="link-wrap">
      <a class="link" href="https://www.linkedin.com/in/fengxuprofile/" target="_blank"><i class="anticon anticon-linkedin"></i></a>
      <a class="link" href="https://github.com/ngfx/" target="_blank"><i class="anticon anticon-github"></i></a>
      <a class="link" href="mailto:me@fengxu.me"><i class="anticon anticon-mail"></i></a>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      margin-top: 60px;
      margin-bottom: 60px;
      height: 500px;
      width: 400px;
      background: url("assets/bg.jpg") no-repeat top center white;
      background-size: contain;
      border-radius: 6px;
      box-shadow: rgba(0, 0, 0, 0.8) 0 0 6px 0;
      position: relative;
    }
    
    .avatar-wrap {
      height: 100%;
      width: 100%;
      display: flex;
      flex-flow: nowrap row;
      justify-content: center;
      align-items: center;
    }

    app-avatar {
      transform: translateY(-25px);
    }
    
    .text-wrap {
      position: absolute;
      bottom: 0;
      z-index: 1;
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      width: 100%;
      transform: translateY(-80px);
    }

    p {
      font-weight: 200;
      margin-bottom: 10px;
      font-size: 14px;
    }
    
    p:nth-child(1) {
      font-size: 24px;
    }
    
    .link-wrap {
      position: absolute;
      bottom: 0;
      z-index: 1;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-evenly;
      align-items: center;
      width: 100%;
      transform: translateY(-20px);
    }
    
    .link {
      display: inline-block;
      color: steelblue;
      font-size: 30px;
    }
  `]
})
export class ProfileComponent {
}
