import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { UsersService } from '../users.service';

import { User } from '../user.model';
import { DataStorageService } from '../data-storage.servcie';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html',
  styleUrls: ['./user-input.component.css']
})
export class UserInputComponent implements OnInit {

  @ViewChild('f',{static: true}) search: NgForm;
  userName: string="";
  buttonName: string="Add";

  constructor( private usersService: UsersService,
               private dataStorageService: DataStorageService ) { }

  ngOnInit() {
    this.usersService.activateEdit.subscribe((data:User)=>{
      this.buttonName = "Update";
      this.search.setValue({
        userName: data.username
      })
    })
  }

  addUser(form: NgForm){
    console.log(form.value);
    const user = new User(form.value.userName);
    this.usersService.insertEntry(user);
    this.search.reset();
  }
}
