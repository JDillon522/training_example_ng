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
  // dialogRef: MdDialogRef<AddUserComponent>;

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
      if (result === 'get') {
        this.getUsers();
      }
    });
  }

  openDeleteUser(id: number, first_name: string, last_name: string) {
    let dialogRef = this.dialog.open(DeleteUserComponent);
    dialogRef.componentInstance.id = id;
    dialogRef.componentInstance.first_name = first_name;
    dialogRef.componentInstance.last_name = last_name;
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'get') {
        this.getUsers();
      }
    });
  }

  openEditUser(id: number, first_name: string, last_name: string, email: string) {
    let dialogRef = this.dialog.open(EditUserComponent);
    dialogRef.componentInstance.id = id;
    dialogRef.componentInstance.first_name = first_name;
    dialogRef.componentInstance.last_name = last_name;
    dialogRef.componentInstance.email = email;
    dialogRef.afterClosed().subscribe(result => {
console.log('RESULTS', result)
      if (result === 'get') {
        this.getUsers();
      }
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


}
