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
  public id: Number;

  constructor(
    private usersService: UsersService,
    private dialogRef: MdDialogRef<DeleteUserComponent>
  ) { }

  @Input()
  set name(name: string) {
    console.log('NAME', name)
  }

  ngOnInit() {
  }

}
