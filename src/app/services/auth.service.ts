import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  private loggedIn = false;

  constructor(private http: Http) {
    this.http.get('https://dashboard.pclub.in/api/user/me').toPromise()
      .then((res) => {
        this.loggedIn = true;
      })
      .catch((err) => this.loggedIn = false);
  }

  login(username: string, password: string): Promise<any> {

    return this.http.post('https://dashboard.pclub.in/api/user/login',
                          {'username': username, 'password': password})
      .toPromise()
      .then((res) => {
        this.loggedIn = true;
        return res.status;
      });

  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

}
