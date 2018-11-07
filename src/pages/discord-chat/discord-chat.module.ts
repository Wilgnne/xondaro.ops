import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DiscordChatPage } from './discord-chat';

@NgModule({
  declarations: [
    DiscordChatPage,
  ],
  imports: [
    IonicPageModule.forChild(DiscordChatPage),
  ],
})
export class DiscordChatPageModule {}
