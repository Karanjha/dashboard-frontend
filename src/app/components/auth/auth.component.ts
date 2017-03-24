import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MdSnackBar } from '@angular/material';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  username: string;
  password: string;
  loading = false;
  @Output() loggedIn: EventEmitter<boolean> = new EventEmitter<boolean>();


  redirectUrl = [];

  constructor(private authService: AuthService,
              public snackBar: MdSnackBar) {}

  login() {
    this.loading = true;
    this.authService.login(this.username, this.password)
      .then(res => {
        this.snackBar.open('Login Successful', 'Dismiss', {
          duration: 3000
        });
        this.loggedIn.emit(true);
      })
      .catch(res => {
        this.loading = false;
        this.snackBar.open('Login Unsuccessful', 'Dismiss', {
          extraClasses: ['error']
        });
        this.loggedIn.emit(false);
      });
  }

  ngOnInit() {}

}
