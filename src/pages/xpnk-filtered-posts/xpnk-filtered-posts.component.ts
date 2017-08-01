import { Component, Input }     	          from '@angular/core';

@Component({
  selector:                        		     'xpnk-filtered-posts',
  templateUrl:                     		     'xpnk-filtered-posts.component.html',
})

export class XpnkFilteredPostsComponent {

  @Input() filteredDisqusions$;
  @Input() filteredTweets$;
  @Input() filteredInstagrams$;
  @Input() disqusSelected;
  @Input() instaSelected;
  @Input() twitSelected;

  constructor() {

  }      

}