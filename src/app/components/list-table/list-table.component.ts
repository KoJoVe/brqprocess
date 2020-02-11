import { Component, OnInit } from '@angular/core';

import { Item } from '../../models/item.model';
import { ListService } from '../../services/list/list.service';

@Component({
  selector: 'list-table-component',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.scss'],
})
export class ListTableComponent implements OnInit {
  items: Item[] = [];
  adding = false;

  constructor(protected itemsService: ListService) {}

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.adding = false;
    this.itemsService.getItems().subscribe((res: Item[]) => {
      if (res) {
        this.items = res;
      }
    });
  }
}
