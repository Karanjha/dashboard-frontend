import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { LoggedInGuard } from '../../services/auth.guard';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  username: string;
  password: string;
  message: string;

  redirectUrl = [];

  constructor(private authService: AuthService,
              private loggedInGuard: LoggedInGuard,
              private router: Router) {}

  login() {
    this.authService.login(this.username, this.password)
      .then(res => {
        this.message = 'Login Successful';
        if (this.redirectUrl.length !== 0) {
          console.log(this.redirectUrl);
          this.router.navigate(this.redirectUrl);
        } else {
          this.router.navigate(['main']);
        }
      })
      .catch(res => {
        this.message = 'Login Failure';
      });
  }

  ngOnInit() {
    this.loggedInGuard.redirectUrlSubject
      .subscribe((url) =>
                 this.redirectUrl = [url]);
  }

}
