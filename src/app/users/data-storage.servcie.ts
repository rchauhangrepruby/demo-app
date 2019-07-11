import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from './users.service';

import { User } from './user.model';

@Injectable({ providedIn: 'root' })
export class DataStorageService{
  constructor(private usersService: UsersService, private http: HttpClient) {}
  
  storeData() {
    const users = this.usersService.getUsers();
    this.http.put('https://fir-project-ea883.firebaseio.com/Users.json',users)
      .subscribe(response => {
        console.log(response);
      })
    }

  fetchData() {
    return this.http.get<User[]>('https://fir-project-ea883.firebaseio.com/Users.json')
      .subscribe(data => {
        this.usersService.setUsers(data);
    });
  }
}