import { Injectable } from '@angular/core';
import { Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { HttpWrapperService } from './http-wrapper.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  public loggedIn: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpWrapperService) {
    if (localStorage.getItem('auth')) {
        console.log(`Logged In in via local token temporarily ${true}`);
      this.loggedIn.next(true);
    }
    this.http.get('https://dashboard.pclub.in/api/user/me')
      .toPromise()
      .then((res) => {
        console.log(`Logged In in AuthService ${true}`);
        this.loggedIn.next(true);
      })
      .catch((err) => {
        if (err.status === 401) {
          this.loggedIn.next(false);
        }
      });
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
        this.loggedIn.next(true);
        return res.status;
      });

  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn;
  }

}
