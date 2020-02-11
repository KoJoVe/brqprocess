import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'field-component',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.scss'],
})
export class FieldComponent {
  @Input()
  name = '';

  @Input()
  key = 'key';

  @Input()
  mask = false;

  @Output()
  fieldChange = new EventEmitter();

  emitFieldValue(event) {
    this.fieldChange.emit({
      value: event.target.value,
      key: this.key
    });
  }
}
