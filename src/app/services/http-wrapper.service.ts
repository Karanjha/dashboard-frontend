import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpWrapperService {

  constructor(private http: Http) { }

  get(url: string): Observable<Response>  {
    const header = new Headers();
    if (localStorage.getItem('username')) {
      header.append('X-Username-Header', localStorage.getItem('username'));
    }
    if (localStorage.getItem('timestamp')) {
      header.append('X-Timestamp-Header', localStorage.getItem('timestamp'));
    }
    if (localStorage.getItem('auth')) {
      header.append('X-Auth-Header', localStorage.getItem('auth'));
    }

    return this.http.get(url, {headers: header});
  }
  post(url: string, data: any): Observable<Response> {
    const header = new Headers();
    if (localStorage.getItem('username')) {
      header.append('X-Username-Header', localStorage.getItem('username'));
    }
    if (localStorage.getItem('timestamp')) {
      header.append('X-Timestamp-Header', localStorage.getItem('timestamp'));
    }
    if (localStorage.getItem('auth')) {
      header.append('X-Auth-Header', localStorage.getItem('auth'));
    }

    return this.http.post(url, data, {headers: header});
  }

}
