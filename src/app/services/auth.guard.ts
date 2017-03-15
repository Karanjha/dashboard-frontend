import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Subject } from 'rxjs/Subject';

import { AuthService } from './auth.service';

@Injectable()
export class LoggedInGuard implements CanActivate {

  redirectUrlSubject = new Subject();

  constructor(private authService: AuthService,
              private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.authService.isLoggedIn()
      .then((loggedIn) => {
        if (!loggedIn) {
          this.redirectUrlSubject.next(state.url);
          this.router.navigate(['login']);
        }
        return loggedIn;
      });
  }

}

@Injectable()
export class LoggedOutGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) {}

  canActivate() {
    return this.authService.isLoggedIn().then((loggedIn) => {
      if (loggedIn) {
        this.router.navigate(['main']);
      }
      return !loggedIn;
    });
  }

}
