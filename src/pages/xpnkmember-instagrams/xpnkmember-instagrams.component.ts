import { 
Component, 
OnInit, 
Input }     								                from '@angular/core';
import { GroupMembersComponent }        	  from '../group-members/group-members.component';
import { XpnkInstagram }                   	from '../xpnkInstagram';
import { XpnkMemberInstagrams }             from '../xpnkMemberInstagrams';

declare var instgrm:                        any;

@Component({
  selector:                        		      'xpnkmember-instagrams',
  templateUrl:                     		      '../xpnkmember-instagrams/xpnkmember-instagrams.component.html',
})

export class XpnkMemberInstagramsComponent {

  @Input() groupInstagrams: XpnkMemberInstagrams[];
  @Input() xpnkuser;

  filteredInstagrams$:                      XpnkInstagram[] = [];
  private memberObject:             	      XpnkMemberInstagrams[];
  private xpnkidval:					              string;

  memberInstagrams:                         XpnkInstagram[];

  constructor() { } 

  instagramsProcess(): void { 
    setTimeout(() =>{
      instgrm.Embeds.process();
    }, 10 );
  }


  memberInstagramsFilter(): void {

  	this.xpnkidval = this.xpnkuser;

    console.log( 'Execute filter' );
    console.log( 'xpnkid: ', this.xpnkidval );
    console.log( 'this.groupInstagrams: ', this.groupInstagrams)
    
    this.memberObject = this.groupInstagrams.filter((memberobj: XpnkMemberInstagrams) => memberobj.XpnkID === this.xpnkidval);
    this.filteredInstagrams$ = this.memberObject[0].InstagramPosts;
    console.log("this.filteredInsagrams:  ", this.filteredInstagrams$);
    this.instagramsProcess();
  }
}

