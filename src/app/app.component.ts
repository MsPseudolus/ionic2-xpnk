import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GroupMembersProvider }          from '../providers/group-members-service/group-members-service';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl:        'app.html',
  providers:          [GroupMembersProvider]
})
export class MyApp {
  rootPage:any = TabsPage;

  title                               = 'xapnik';
  logoUrl                             = './assets/img/Logo-01-1725x1725.gif';

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,

    private groupMembersProvider: GroupMembersProvider ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
