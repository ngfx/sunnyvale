import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-wechat',
  template: `
    <div class="text-wrap">
      <span class="text">{{'Join me on' | uppercase}}</span>
      <span class="text" style="font-weight: 500; color: steelblue"><i class="anticon anticon-wechat"></i> WECHAT</span>
    </div>
    <div class="code-wrap">
      <div class="code"></div>
    </div>
    <div class="link-wrap" (click)="gotoBack()">
      <span class="link" title="BACK"><i class="anticon anticon-sync"></i></span>
    </div>
  `,
  styleUrls: ['./wechat.component.scss']
})
export class WechatComponent {
  @Output() switchSide: EventEmitter<void> = new EventEmitter();

  gotoBack(): void {
    this.switchSide.emit();
  }
}
