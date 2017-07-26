import { 
Component, 
OnInit, 
Input }     							              from '@angular/core';
import { GroupMembersComponent }        from '../group-members/group-members.component';
import { XpnkTweet }                    from '../xpnkTweet';
import { XpnkMemberTweets }             from '../xpnkMemberTweets';
import { Ng2TweetService }              from 'ng2-tweet/lib/index';

declare var timeago:                      any;

@Component({
  selector:                        		'xpnkmember-tweets',
  templateUrl:                     		'../xpnkmember-tweets/xpnkmember-tweets.component.html',
})

export class XpnkMemberTweetsComponent {

  @Input() groupTweets: XpnkMemberTweets[];
  @Input() xpnkuser;

  filteredTweets$:                  	XpnkTweet[] = [];
  private memberObject:             	XpnkMemberTweets[];
  private xpnkidval:					        string;

  memberTweets:  XpnkTweet[];

  constructor( private ng2TweetService: Ng2TweetService ) {}

  memberTweetsFilter(): void {

  	this.xpnkidval = this.xpnkuser;

    console.log( 'Execute filter' );
    console.log( 'xpnkid: ', this.xpnkidval );
    console.log( 'this.groupTweets: ', this.groupTweets)
    
    this.memberObject = this.groupTweets.filter((memberobj: XpnkMemberTweets) => memberobj.XpnkID === this.xpnkidval);
    this.filteredTweets$ = this.memberObject[0].TwitterPosts;
    console.log("this.filteredTweets:  ", this.filteredTweets$);
  }
}

