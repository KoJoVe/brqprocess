import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { MessageModalService } from '../message-modal/message-modal.service';
import { LoadingService } from '../loading/loading.service';

const { apiUrl } = environment;

@Injectable()
export class LoginService {
  private readonly url = apiUrl;
  private token = null;
  private user = '';

  constructor(
    protected readonly loading: LoadingService,
    protected readonly modal: MessageModalService,
    protected readonly http: HttpClient,
  ) {}

  public getToken() {
    return this.token;
  }

  public getUser() {
    return this.user;
  }

  public authenticate(user: { username: string, password: string }) {
    this.loading.setLoading(true);

    return this.http.post(this.url + '/users/authenticate', user, {
      observe: 'response'
    })
      .pipe(
        map(resp => {
          const auth = resp.headers && resp.headers.get('X-Auth-Token');
          if (!auth) {
            this.modal.setMessage('Erro durante o login. Token de autorização nulo.');
            return;
          }
          this.token = auth;
          this.user = resp.body && (resp.body as any).id;
          this.loading.setLoading(false);
          return true;
        }),
        catchError(err => {
          this.loading.setLoading(false);
          this.modal.setMessage('Erro durante o login: ' + err.message);
          return of();
        })
      );
  }

  public register(user: { username: string, password: string, firstname: string, lastname: string }) {
    this.loading.setLoading(true);

    return this.http.post(this.url + '/users/register', user, {
      observe: 'response'
    })
      .pipe(
        switchMap(() =>
          this.authenticate(user)
        ),
        catchError(err => {
          this.loading.setLoading(false);
          this.modal.setMessage('Erro durante o registro: ' + err.message);
          return of();
        })
      );
  }

}
