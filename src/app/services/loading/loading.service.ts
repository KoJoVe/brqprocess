import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoadingService {
  loading: BehaviorSubject<boolean> = new BehaviorSubject(false);

  setLoading(value: boolean) {
    this.loading.next(value);
  }

}
