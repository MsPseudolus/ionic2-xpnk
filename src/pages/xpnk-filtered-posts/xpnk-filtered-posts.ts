import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } 				from 'ionic-angular';

import { XpnkMemberDisqusionsComponent }					from '../xpnkmember-disqusions/xpnkmember-disqusions.component'

/**
 * Generated class for the XpnkFilteredPostsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'xpnk-filtered-posts',
  templateUrl: 'xpnk-filtered-posts.html',
})
export class XpnkFilteredPostsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad XpnkFilteredPostsPage');
  }

}
