import { Component, OnInit, Input } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';
import { User } from '../../../services/user';
import { UsersService } from '../../../services/users.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.scss'],
  providers: [ UsersService ]
})
export class DeleteUserComponent implements OnInit {
  private errorMessage: String;
  public id: Number;
  public first_name: String;
  public last_name: String;
  
  constructor(
    private usersService: UsersService,
    private dialogRef: MdDialogRef<DeleteUserComponent>
  ) { }

  ngOnInit() {
  }

  deleteUser() {
    this.usersService.deleteUser(this.id)
                      .subscribe(
                        (user) => {
                          this.dialogRef.close('get');
                        }, (error) => {
                          this.errorMessage = <any>error;
                        });
  }

}
