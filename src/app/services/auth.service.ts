import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  login(username: string, password: string): Promise<Response> {
    return this.http.post('dashboard.pclub.in/api/user/login', {'username': username, 'password': password})
      .toPromise()
      .then((res) => {
        return res;
      });
  }
}
