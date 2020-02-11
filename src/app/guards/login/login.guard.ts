import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { LoginService } from '../../services/login/login.service';

@Injectable()
export class LoginGuard {
  constructor(
    protected router: Router,
    protected login: LoginService
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): boolean {
    const token = this.login.getToken();

    if (token) {
      return true;
    }

    this.router.navigate(['login']);
    return false;
  }
}
