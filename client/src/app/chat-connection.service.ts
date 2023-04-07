import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class ChatConnectionService {

  private socket$: WebSocketSubject<any>;

  constructor() {
    this.socket$ = webSocket('ws://localhost:3000');

    this.socket$.subscribe((message) => {
      console.log(`Received message: ${message}`);
    })
  }

  sendMessage(message: string) {
    this.socket$.next(message);
  }
}
