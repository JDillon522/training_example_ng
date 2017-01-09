import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../services/user';
import '../rxjs-operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [ UsersService ]
})
export class UsersComponent implements OnInit {
  users: User[];
  errorMessage: string;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers()
                     .subscribe(
                       (users) => {
                         this.users = users;
                       }, (error) => {
                         this.errorMessage = <any>error;
                       });
  }

  addUser() {
    console.log('add')
  }


}
