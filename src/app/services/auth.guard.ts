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
    if (this.authService.isLoggedIn()) {
      return true;
    }
    this.redirectUrlSubject.next(state.url);
    this.router.navigate(['login']);
    return false;
  }

}

@Injectable()
export class LoggedOutGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) {}

  canActivate() {
    if (!this.authService.isLoggedIn()) {
      return true;
    }
    this.router.navigate(['main']);
    return false;
  }

}
