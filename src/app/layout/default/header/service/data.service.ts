import { Injectable } from '@angular/core';
import { StompService, StompState } from '@stomp/ng2-stompjs';
import { Message } from '@stomp/stompjs';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(private _stompService: StompService, ) { }

    public fault_data: string = '';
    public fault_id: number[] = [];
    public fault_count: number = 2;
    public warn_data: string = '';
    public warn_id: number[] = [];
    public warn_count: number = 2;

    public messages: Observable<Message>;
    // Subscription status
    public subscribed: boolean;
    // Array of historic message (bodies)
    private subscription: Subscription;

    public fault_subscribe() {

        if (this.subscribed) {
            return;
        }
        // Stream of messages
        this.messages = this._stompService.subscribe('/web-know-fault');


        // Subscribe a function to be run on_next message
        this.subscription = this.messages.subscribe(this.fault_on_next);


        this.subscribed = true;

    }

    public fault_on_next = (message: Message) => {
        this.fault_data = message.body;
        console.log(this.fault_data)
        //解析消息队列,获取故障id
        this.fault_id = [1, 2];
        this.fault_count = this.fault_id.length;
    }

    public warn_subscribe() {

        if (this.subscribed) {
            return;
        }
        // Stream of messages
        this.messages = this._stompService.subscribe('/web-know-warning');


        // Subscribe a function to be run on_next message
        this.subscription = this.messages.subscribe(this.warn_on_next);


        this.subscribed = true;

    }

    public warn_on_next = (message: Message) => {
        this.warn_data = message.body;
        console.log(this.warn_data)
        //解析消息队列,获取故障id
        this.warn_id = [1, 2];
        this.warn_count = this.warn_id.length;
    }
}
