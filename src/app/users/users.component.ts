import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../services/user';
import '../rxjs-operators';
import { MdDialog, MdDialogRef } from '@angular/material';
import { AddUserComponent } from './dialog/add-user/add-user.component';
import { DeleteUserComponent } from './dialog/delete-user/delete-user.component';
import { EditUserComponent } from './dialog/edit-user/edit-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [ UsersService ]
})
export class UsersComponent implements OnInit {
  users: User[];
  errorMessage: string;
  usersProgressBar: string;
  mode = 'indeterminate';


  constructor(
    private usersService: UsersService,
    private dialog: MdDialog
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  openAddUser() {
    let dialogRef = this.dialog.open(AddUserComponent);
    this.usersProgressBar = '';
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'get') {
        this.getUsers();
      }
      this.usersProgressBar = 'hideUsersProgressBar';
    });
  }

  openDeleteUser(id: number, first_name: string, last_name: string) {
    let dialogRef = this.dialog.open(DeleteUserComponent);
    dialogRef.componentInstance.id = id;
    dialogRef.componentInstance.first_name = first_name;
    dialogRef.componentInstance.last_name = last_name;
    this.usersProgressBar = '';
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'get') {
        this.getUsers();
      }
      this.usersProgressBar = 'hideUsersProgressBar';
    });
  }

  openEditUser(id: number, first_name: string, last_name: string, email: string) {
    let dialogRef = this.dialog.open(EditUserComponent);
    dialogRef.componentInstance.id = id;
    dialogRef.componentInstance.first_name = first_name;
    dialogRef.componentInstance.last_name = last_name;
    dialogRef.componentInstance.email = email;
    this.usersProgressBar = '';
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'get') {
        this.getUsers();
      }
      this.usersProgressBar = 'hideUsersProgressBar';
    });
  }

  getUsers() {
    this.usersService.getUsers()
                     .subscribe(
                       (users) => {
                         this.usersProgressBar = 'hideUsersProgressBar';
                         this.users = users;
                       }, (error) => {
                         this.errorMessage = <any>error;
                       });
  }


}
