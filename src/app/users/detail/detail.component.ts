import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { User } from '../../services/user';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  providers: [ UsersService ]
})
export class DetailComponent implements OnInit {
  userId: number;
  user: User;
  errorMessage: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // this.userId = params;
      this.userId = params['id'];
      this.getUser(this.userId);
    });
  }

  getUser(id: number) {
    this.usersService
        .getUser(id)
        .subscribe(
          (user) => {
            console.log(user)
            this.user = user;
          }, (error) => {
            this.errorMessage = <any>error;
          }
        );
  }

}
