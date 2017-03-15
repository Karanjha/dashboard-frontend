import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  private loggedIn: Promise<boolean>;

  constructor(private http: Http) {
    this.loggedIn = this.http.get('https://dashboard.pclub.in/api/user/me')
      .toPromise()
      .then((res) => true)
      .catch((err) => false);
  }

  login(username: string, password: string): Promise<any> {

    return this.http.post('https://dashboard.pclub.in/api/user/login',
                          {'username': username, 'password': password})
      .toPromise()
      .then((res) => {
        this.loggedIn = Promise.resolve(true);
        return res.status;
      });

  }

  isLoggedIn(): Promise<boolean> {
    return this.loggedIn;
  }

}
