import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MessageModalService {
  message: BehaviorSubject<string> = new BehaviorSubject(null);

  setMessage(value: string) {
    this.message.next(value);
  }

}
