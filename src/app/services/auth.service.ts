import { Injectable } from '@angular/core';
import { Headers, Response } from '@angular/http';

import { HttpWrapperService } from './http-wrapper.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  private loggedIn: Promise<boolean>;

  constructor(private http: HttpWrapperService) {
    this.loggedIn = this.http.get('https://dashboard.pclub.in/api/user/me')
      .toPromise()
      .then((res) => {
        console.log(`Logged In in AuthService ${true}`);
        return true;
      })
      .catch((err) => false);
  }

  login(username: string, password: string): Promise<any> {

    return this.http.post('https://dashboard.pclub.in/api/user/login',
                          {'username': username, 'password': password})
      .toPromise()
      .then((res) => {
        const auth = res.json().auth;
        localStorage.setItem('username', auth.username);
        localStorage.setItem('timestamp', auth.timestamp);
        localStorage.setItem('auth', auth.auth);
        this.loggedIn = Promise.resolve(true);
        return res.status;
      });

  }

  isLoggedIn(): Promise<boolean> {
    return this.loggedIn;
  }

}
