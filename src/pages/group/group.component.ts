import { Component } 			from '@angular/core';

export class GroupData {
	groupName:                   string;
	groupId:                     string;
}

@Component({
  selector:                       'group',
  templateUrl:                    'group.component.html',
  //styleUrls:                      ['./group.component.css']
})

export class GroupComponent {
  group:  GroupData = {
    groupName:     	              'dangerladies',
    groupId:		              '43'
  }  
}