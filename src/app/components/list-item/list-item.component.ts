import { Component, Output, EventEmitter } from '@angular/core';

import { Item } from '../../models/item.model';
import { ListService } from '../../services/list/list.service';
import { LoginService } from '../../services/login/login.service';

@Component({
  selector: 'list-item-component',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  @Output()
  close = new EventEmitter();

  item: Item = new Item({});

  constructor(
    protected login: LoginService,
    protected items: ListService
  ) {}

  updateValue(event) {
    this.item[event.key] = event.value;
  }

  add() {
    this.item.userId = this.login.getUser();
    this.item.createDate = Date.now();
    this.items.postItem(this.item).subscribe(res => {
      if (res) {
        this.close.emit();
      }
    });
  }

  cancel() {
    this.close.emit();
  }
}
