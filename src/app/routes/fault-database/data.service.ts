import { Injectable } from '@angular/core';
import { StompService, StompState } from '@stomp/ng2-stompjs';
import { Message } from '@stomp/stompjs';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class DataService {
    public id: number[];
    public button: boolean = true;
    constructor(private _stompService: StompService, ) { }
    public messages: Observable<Message>;
    // Subscription status
    public subscribed: boolean;
    // Array of historic message (bodies)
    private subscription: Subscription;
    abnormal_data: string = '';
    public subscribe() {

        if (this.subscribed) {
            return;
        }
        // Stream of messages
        this.messages = this._stompService.subscribe('/web-optimization');


        // Subscribe a function to be run on_next message
        this.subscription = this.messages.subscribe(this.on_next);


        this.subscribed = true;

    }

    public on_next = (message: Message) => {
        this.abnormal_data = message.body;
        console.log(this.abnormal_data)
        //解析消息队列，如果有消息，优化按钮显示，否则不显示。
        //获取故障库优化id,写入service

        this.id = [1, 2];
        if (this.id = null) {
            this.button = true;
        } else {
            this.button = false;
        }

    }
}
