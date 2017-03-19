import { Component, OnInit } from '@angular/core';
import { MdSnackBar } from '@angular/material';
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
  loading = false;

  redirectUrl = [];

  constructor(private authService: AuthService,
              private loggedInGuard: LoggedInGuard,
              private router: Router,
              public snackBar: MdSnackBar) {}

  login() {
    this.loading = true;
    this.authService.login(this.username, this.password)
      .then(res => {
        this.snackBar.open('Login Successful', 'Dismiss', {
          duration: 3000
        });
        if (this.redirectUrl.length !== 0) {
          this.router.navigate(this.redirectUrl);
        } else {
          this.router.navigate(['main']);
        }
      })
      .catch(res => {
        this.loading = false;
        this.snackBar.open('Login Unsuccessful', 'Dismiss', {
          extraClasses: ['error']
        });
      });
  }

  ngOnInit() {
    this.loggedInGuard.redirectUrlSubject
      .subscribe((url) =>
                 this.redirectUrl = [url]);
  }

}
