import { 
Component, 
OnInit, 
Input }     								                from '@angular/core';
import { GroupMembersComponent }        	  from '../group-members/group-members.component';
import { XpnkDisqusion }                   	from '../xpnkDisqusion';
import { XpnkMemberDisqusions }             from '../xpnkMemberDisqusions';

@Component({
  selector:                        		     'xpnkmember-disqusions',
  templateUrl:                     		     '../xpnkmember-disqusions/xpnkmember-disqusions.component.html',
})

export class XpnkMemberDisqusionsComponent {

  @Input() groupDisqusions: XpnkMemberDisqusions[];
  @Input() xpnkuser;

  filteredDisqusions$:                  XpnkDisqusion[] = [];
  private memberObject:             	XpnkMemberDisqusions[];
  private xpnkidval:					string;

  memberDisqusions:  XpnkDisqusion[];

  constructor() {}

  memberDisqusionsFilter(): void {

  	this.xpnkidval = this.xpnkuser;

    console.log( 'Execute filter' );
    console.log( 'xpnkid: ', this.xpnkidval );
    console.log( 'this.groupDisqusions: ', this.groupDisqusions)
    
    this.memberObject = this.groupDisqusions.filter((memberobj: XpnkMemberDisqusions) => memberobj.XpnkID === this.xpnkidval);
    this.filteredDisqusions$ = this.memberObject[0].DisqusPosts;
    console.log("this.filteredDisqusions:  ", this.filteredDisqusions$);
  }
}
