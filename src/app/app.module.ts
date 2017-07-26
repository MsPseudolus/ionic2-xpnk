import { NgModule, ErrorHandler }                     from '@angular/core';
import { BrowserModule }                              from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler }   from 'ionic-angular';
import { MyApp }                                      from './app.component';
import { HttpModule }                                 from '@angular/http';

import { Ng2TweetModule }                             from 'ng2-tweet/lib/index';

import { GroupComponent }                             from '../pages/group/group.component';
import { GroupMembersComponent }                      from '../pages/group-members/group-members.component';
import { XpnkFilteredPostsPage }                      from '../pages/xpnk-filtered-posts/xpnk-filtered-posts';

import { GroupMembersProvider }                       from '../providers/group-members-service/group-members-service';

import { XpnkMemberTweetsComponent }                  from '../pages/xpnkmember-tweets/xpnkmember-tweets.component';
import { XpnkMemberInstagramsComponent }              from '../pages/xpnkmember-instagrams/xpnkmember-instagrams.component';
import { XpnkMemberDisqusionsComponent }              from '../pages/xpnkmember-disqusions/xpnkmember-disqusions.component';

import { AboutPage }                                  from '../pages/about/about';
import { ContactPage }                                from '../pages/contact/contact';
import { HomePage }                                   from '../pages/home/home';
import { TabsPage }                                   from '../pages/tabs/tabs';

import { StatusBar }                                  from '@ionic-native/status-bar';
import { SplashScreen }                               from '@ionic-native/splash-screen';
import { TwitterServiceProvider }                     from '../providers/twitter-service/twitter-service';
import { InstagramServiceProvider }                   from '../providers/instagram-service/instagram-service';
import { DisqusServiceProvider }                      from '../providers/disqus-service/disqus-service';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    GroupComponent,
    GroupMembersComponent,
    XpnkFilteredPostsPage,
    XpnkMemberTweetsComponent,
    XpnkMemberInstagramsComponent,
    XpnkMemberDisqusionsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    Ng2TweetModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TwitterServiceProvider,
    GroupMembersProvider,
    InstagramServiceProvider,
    DisqusServiceProvider
  ]
})
export class AppModule {}

