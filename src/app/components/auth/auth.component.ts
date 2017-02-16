import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from 'services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  username: string;
  password: string;
  message: string;

  constructor(private authService: AuthService,
              private router: Router) { }

  login() {
    this.authService.login(this.username, this.password)
      .then(res => {
        this.message = 'Login Successful';
      })
      .catch(res => {
        this.message = 'Login Failure';
      });
  }

  ngOnInit() {
  }

}
