import { 
Component, 
Input,
OnInit }     								                  from '@angular/core';

import { XpnkTweet }                          from '../../pages/xpnkTweet';
import { XpnkMemberTweets }                   from '../../pages/xpnkMemberTweets';
import { XpnkInstagram }                      from '../../pages/xpnkInstagram';
import { XpnkMemberInstagrams }               from '../../pages/xpnkMemberInstagrams';
import { XpnkDisqusion }                      from '../../pages/xpnkDisqusion';
import { XpnkMemberDisqusions }               from '../../pages/xpnkMemberDisqusions';

import { Ng2TweetService }                    from 'ng2-tweet/lib/index';

declare var timeago:                          any;
declare var instgrm:                          any;

@Component({
  selector:                        		        'xpnk-member-buttons',
  templateUrl:                     		        'xpnkmember-buttons.component.html'
})

export class XpnkMemberButtonsComponent implements OnInit {

  @Input() xpnkuser;
  @Input() groupTweets;
  @Input() groupInstagrams;
  @Input() groupDisqusions;

  private xpnkidval:                          string;
  private filteredTweets$:                    XpnkTweet[] = [];
  private tweets:                             XpnkMemberTweets[];
  private memberTwitObject:                   XpnkMemberTweets[];
  private filteredInstagrams$:                XpnkInstagram[] = [];
  private disqusions:                         XpnkMemberDisqusions[];
  private memberInstaObject:                  XpnkMemberInstagrams[];
  private filteredDisqusions$:                XpnkDisqusion[] = [];
  private memberDisqObject:                   XpnkMemberDisqusions[];
  private disqusSelected:                     boolean;
  private instaSelected:                      boolean;
  private twitSelected:                       boolean;


  memberTweets:                               XpnkTweet[];
  memberInstagrams:                           XpnkInstagram[];
  memberDisqusions:                           XpnkDisqusion[];
  
  constructor(
    private ng2TweetService: Ng2TweetService
  ) {
      this.disqusSelected =                   false;
      this.instaSelected =                    false;
      this.twitSelected =                     false;
   } 

  instagramsProcess(): void { 
    setTimeout(() =>{
      instgrm.Embeds.process();
    }, 1 );
  }

  memberTweetsFilter(): void {

    this.xpnkidval = this.xpnkuser;
    this.tweets = this.groupTweets;

    console.log( 'Execute filter' );
    console.log( 'xpnkid: ', this.xpnkidval );
    console.log( 'this.groupTweets: ', this.groupTweets)
    
    this.memberTwitObject = this.tweets.filter((memberobj: XpnkMemberTweets) => memberobj.XpnkID === this.xpnkidval);
    this.filteredTweets$ = this.memberTwitObject[0].TwitterPosts;
    console.log("this.filteredTweets:  ", this.filteredTweets$);
  }

  memberInstagramsFilter(): void {

    this.xpnkidval = this.xpnkuser;

    console.log( 'Execute filter' );
    console.log( 'xpnkid: ', this.xpnkidval );
    console.log( 'this.groupInstagrams: ', this.groupInstagrams)
    
    this.memberInstaObject = this.groupInstagrams.filter((memberobj: XpnkMemberInstagrams) => memberobj.XpnkID === this.xpnkidval);
    this.filteredInstagrams$ = this.memberInstaObject[0].InstagramPosts;
    console.log("this.filteredInstagrams:  ", this.filteredInstagrams$);
    this.instagramsProcess();
  }

  memberDisqusionsFilter(): void {

    this.xpnkidval = this.xpnkuser;
    this.disqusions = this.groupDisqusions;

    console.log( 'Execute filter' );
    console.log( 'xpnkid: ', this.xpnkidval );
    console.log( 'this.groupDisqusions: ', this.groupDisqusions)
    
    this.memberDisqObject = this.disqusions.filter((memberobj: XpnkMemberDisqusions) => memberobj.XpnkID === this.xpnkidval);
    this.filteredDisqusions$ = this.memberDisqObject[0].DisqusPosts;
    console.log("this.filteredDisqusions:  ", this.filteredDisqusions$);
  }

  showTweets(): void {
    this.twitSelected = !this.twitSelected;
    console.log("showTweets toggled! " + this.twitSelected);
  }

  showInsta(): void {
    this.instaSelected = !this.instaSelected;
    console.log("Insta button toggled! " + this.instaSelected);
    this.instagramsProcess();
  }

  showDisqus(): void {
    this.disqusSelected = !this.disqusSelected;
    console.log("Disqus button toggled! " + this.disqusSelected);
  }

   ngOnInit(): void {
    setTimeout(() =>{
      this.memberDisqusionsFilter();
    }, 100 ); 
    setTimeout(() =>{
      this.memberTweetsFilter();
    }, 100 );    
    setTimeout(() =>{
      this.memberInstagramsFilter();
    }, 200 ); 
  }

}
