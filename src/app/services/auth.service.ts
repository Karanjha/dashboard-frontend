import { Injectable } from '@angular/core';
import { Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { HttpWrapperService } from './http-wrapper.service';
import { Student } from '../models/student.model';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  public loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public user: Student;

  constructor(private http: HttpWrapperService) {
    if (localStorage.getItem('auth')) {
      this.loggedIn.next(true);
    }
    if (localStorage.getItem('user')) {
      this.user = JSON.parse(localStorage.getItem('user'));
    }
    this.http.get('https://dashboard.pclub.in/api/user/me')
      .toPromise()
      .then((res) => {
        this.user = res.json() as Student;
        localStorage.setItem('user', JSON.stringify(this.user));
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
        this.user = res.json().user as Student;
        localStorage.setItem('user', JSON.stringify(this.user));
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
