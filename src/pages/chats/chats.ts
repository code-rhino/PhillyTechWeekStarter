import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chats',
  templateUrl: 'chats.html',
})
export class ChatsPage {

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatsPage');
  }

  public chats: any;

  constructor(public nav: NavController) {
    // get sample data only
    this.chats = [];
  }

  viewChat(id) {
    this.nav.push("ChatDetailPage", {id: id});
  }
}
