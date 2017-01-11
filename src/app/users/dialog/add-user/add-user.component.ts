import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { User } from '../../../services/user';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  providers: [ UsersService ]
})
export class AddUserComponent implements OnInit {
  userAction: string = 'Add';
  errorMessage: string;
  model = new User('', '', '', null);
  // user: User;

  constructor(
    public dialogRef: MdDialogRef<AddUserComponent>,
    private usersService: UsersService
  ) { }

  ngOnInit() {
  }

  saveUser() {
    this.usersService.addUser(this.model)
                      .subscribe(
                        (user) => {
                          this.dialogRef.close('get');
                        }, (error) => {
                          this.errorMessage = <any>error;
                        });
  }
}
