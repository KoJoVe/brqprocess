import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
  HttpHeaders,
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { LoginService } from '../services/login/login.service';

@Injectable()
export class LoginInterceptor implements HttpInterceptor {
  constructor(protected login: LoginService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const token = this.login.getToken();

    if (token) {
      const newReq = req.clone({
        headers: new HttpHeaders({
          'Authorization': 'Bearer ' + this.login.getToken()
        })
      });
      return next.handle(newReq);
    }

    return next.handle(req);
  }
}
