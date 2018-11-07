import { Injectable } from '@angular/core';
import * as Discord from 'discord.js'

/*
  Generated class for the DiscordApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DiscordApiProvider {
  client = new Discord.Client();

  guilds:Array<Discord.Guild> = new Array<Discord.Guild>();

  public initialize(token)
  {
    this.client.on("ready", () => {
      this.guilds = this.client.guilds.array();
    });

    this.client.login(token);
  }


  constructor() {
    console.log('Hello DiscordApiProvider Provider');
  }

}
