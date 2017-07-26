import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { XpnkMemberDisqusionsComponent }					from '../xpnkmember-disqusions/xpnkmember-disqusions.component'
import { XpnkFilteredPostsPage } 							from './xpnk-filtered-posts';

@NgModule({
  declarations: [
    XpnkFilteredPostsPage,
  ],
  imports: [
    IonicPageModule.forChild(XpnkFilteredPostsPage),
  ],
  exports: [
    XpnkFilteredPostsPage
  ]
})
export class XpnkFilteredPostsPageModule {}
