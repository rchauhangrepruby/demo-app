import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

import { User } from '../user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[]=[];

  constructor(private usersService: UsersService) {    
   }

  ngOnInit() {
    this.usersService.userEntry.subscribe((data: User[])=>{
      this.users=data;
    });
  }

  activateEdit(index: number){
    this.usersService.updateIndex(index);
  }

  deleteUser(index: number){
    this.usersService.deleteEntry(index);
  }

}