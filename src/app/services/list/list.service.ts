import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { MessageModalService } from '../message-modal/message-modal.service';
import { LoadingService } from '../loading/loading.service';
import { Item } from '../../models/item.model';
import { LoginService } from '../login/login.service';

const { apiUrl } = environment;

@Injectable()
export class ListService {
  private readonly url = apiUrl;

  constructor(
    protected readonly login: LoginService,
    protected readonly loading: LoadingService,
    protected readonly modal: MessageModalService,
    protected readonly http: HttpClient,
  ) {}

  public getItems(): Observable<Item[]> {
    this.loading.setLoading(true);

    return this.http.get(this.url + '/tickets')
      .pipe(
        map((resp: any) => {
          this.loading.setLoading(false);
          return resp.map(i => new Item(i));
        }),
        catchError(err => {
          this.loading.setLoading(false);
          this.modal.setMessage('Erro durante a listagem de solicitações: ' + err.message);
          return of(null);
        })
      );
  }

  public postItem(item: Item): Observable<Item> {
    this.loading.setLoading(true);

    return this.http.post(this.url + '/tickets/create', item)
      .pipe(
        map((resp: any) => {
          this.loading.setLoading(false);
          return new Item(resp);
        }),
        catchError(err => {
          this.loading.setLoading(false);
          this.modal.setMessage('Erro durante a criação da solicitação: ' + err.message);
          return of(null);
        })
      );
  }

  public deleteItem(item: number): Observable<boolean> {
    this.loading.setLoading(true);

    return this.http.delete(this.url + '/tickets/' + item)
      .pipe(
        map((resp: any) => {
          this.loading.setLoading(false);
          return true;
        }),
        catchError(err => {
          this.loading.setLoading(false);
          this.modal.setMessage('Erro durante a exclusão da solicitação: ' + err.message);
          return of(null);
        })
      );
  }

}
