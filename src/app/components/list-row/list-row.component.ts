import { Component, Input, EventEmitter, Output } from '@angular/core';

import { Item } from '../../models/item.model';
import { LoginService } from '../../services/login/login.service';
import { ListService } from '../../services/list/list.service';

@Component({
  selector: 'list-row-component',
  templateUrl: './list-row.component.html',
  styleUrls: ['./list-row.component.scss'],
})
export class ListRowComponent {
  @Input()
  item: Item;

  @Output()
  delete = new EventEmitter();

  userId: string;

  constructor(
    protected list: ListService,
    protected login: LoginService
  ) {
    this.userId = login.getUser();
  }

  removeItem(id) {
    this.list.deleteItem(id).subscribe(res => {
      if (res) {
        this.delete.emit();
      }
    });
  }
}
