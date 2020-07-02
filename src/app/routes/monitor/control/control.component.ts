import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';

import { StompService, StompState } from '@stomp/ng2-stompjs';
import { Message } from '@stomp/stompjs';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styles: [],

})
export class ControlComponent implements OnInit {
  public messages: Observable<Message>;
  // Subscription status
  public subscribed: boolean;
  // Array of historic message (bodies)
  private subscription: Subscription;
  abnormal_data: string = '';

  ngOnInit() {


  }

  public subscribe(id: string) {

    if (this.subscribed) {
      return;
    }
    // Stream of messages
    this.messages = this._stompService.subscribe('/initial-data', { id: id });


    // Subscribe a function to be run on_next message
    this.subscription = this.messages.subscribe(this.on_next);


    this.subscribed = true;

  }

  public on_next = (message: Message) => {
    this.abnormal_data = message.body;
    console.log(this.abnormal_data)
  }
  getcascaderId(info) {//获取选择的设备
    //console.log(info);
    this.subscribe(info);
  }
  a() {


  }
  constructor(private notification: NzNotificationService, private _stompService: StompService, ) {


  }


}
