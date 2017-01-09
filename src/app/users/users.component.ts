import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../services/user';
import '../rxjs-operators';
import { MdDialog, MdDialogRef } from '@angular/material';
import { AddUserComponent } from './dialog/add-user/add-user.component';

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
    private usersService: UsersService,
    private dialog: MdDialog
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  openAddUser() {
    let dialogRef = this.dialog.open(AddUserComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('CLOSED')
    });
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

  }


}
