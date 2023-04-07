import { Component } from '@angular/core';
import { ChatConnectionService } from './chat-connection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  message: string | undefined;

  constructor(private chatService: ChatConnectionService) {}

  sendMessage() {
    this.chatService.sendMessage(this.message ?? '');
    this.message = '';
  }
}
