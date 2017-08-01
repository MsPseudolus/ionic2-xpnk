import { Component, OnInit }               from '@angular/core';
import { GroupComponent }                  from '../group/group.component';

import { XpnkFilteredPostsComponent }      from '../xpnk-filtered-posts/xpnk-filtered-posts.component';

import { GroupMembersProvider }            from '../../providers/group-members-service/group-members-service';
import { TwitterServiceProvider }          from '../../providers/twitter-service/twitter-service';
import { InstagramServiceProvider }        from '../../providers/instagram-service/instagram-service';
import { DisqusServiceProvider }           from '../../providers/disqus-service/disqus-service';

import { XpnkTweet }                       from '../xpnkTweet';
import { XpnkMemberTweets }                from '../xpnkMemberTweets';
import { XpnkInstagram }                   from '../xpnkInstagram';
import { XpnkMemberInstagrams }            from '../xpnkMemberInstagrams';
import { XpnkDisqusion }                   from '../xpnkDisqusion';
import { XpnkMemberDisqusions }            from '../xpnkMemberDisqusions';

import                                     'rxjs/add/operator/do';
import { Observable }                      from 'rxjs/Observable';


export class GroupMember {
  XpnkID:                                   string;
  TweeterID:                                string;
  ProfileImg:                               string;
}

@Component({
  selector:                                'group-members',
  templateUrl:                             '../group-members/group-members.component.html',
  //styleUrls:                            ['../group-members/group-members.component.css'],
  providers:                              [ GroupMembersProvider,
                                            TwitterServiceProvider,
                                            InstagramServiceProvider,
                                            DisqusServiceProvider
                                          ]
})

export class GroupMembersComponent implements OnInit {
  groupMembers:                           GroupMember[];
  groupTweets:                            XpnkMemberTweets[];
  groupInstagrams:                        XpnkMemberInstagrams[];
  groupDisqusions:                        XpnkMemberDisqusions[];
 
  constructor( 
    private groupMembersProvider:         GroupMembersProvider, 
    private groupTweetsService:           TwitterServiceProvider,
    private groupInstagramsService:       InstagramServiceProvider,
    private groupDisqusionsService:       DisqusServiceProvider 
  ) { }

  getGroupMembers(): void {
    this.groupMembersProvider.getGroupMembers()
    .subscribe( data => this.groupMembers = data );
  }

  getGroupTweets(): void {
    this.groupTweetsService.getTweets()
    .subscribe( data => this.groupTweets = data );
  }

  getGroupInstagrams(): void {
    this.groupInstagramsService.getInstagrams()
    .subscribe( data => this.groupInstagrams = data );
  }

  getGroupDisqusions(): void {
    this.groupDisqusionsService.getDisqusions()
    .subscribe( data => this.groupDisqusions = data );
  }

  ngOnInit(): void {
  	this.getGroupMembers();
    this.getGroupTweets();
    this.getGroupInstagrams();
    this.getGroupDisqusions();
  }
}
