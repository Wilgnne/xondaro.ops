import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DiscordApiProvider } from '../../providers/discord-api/discord-api'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public discord:DiscordApiProvider) {
    discord.initialize('NTA4NDA0NDUwNjU5MDA4NTMy.DsQK2w.U-Ecwbo1ikPqbKqfk52_yKAj5Q8');
  }
}
