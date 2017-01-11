import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { User } from '../../../services/user';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss'],
  providers: [ UsersService ]
})
export class EditUserComponent implements OnInit {
  private errorMessage: string;
  public id: number;
  public first_name: string;
  public last_name: string;
  public email: string
  // model = new User(this.first_name, this.last_name, this.email, this.id);

  constructor(
    private usersService: UsersService,
    private dialogRef: MdDialogRef<EditUserComponent>
  ) { }

  ngOnInit() {
  }

  editUser() {
    let thisUser = {
      first_name: this.first_name,
      last_name: this.last_name,
      email: this.email
    };

    this.usersService.editUser(this.id, thisUser)
                      .subscribe(
                        (user) => {
                          this.dialogRef.close('get');
                        }, (error) => {
                          this.errorMessage = <any>error;
                        });
  }
}
