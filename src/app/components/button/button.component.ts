import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'button-component',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input()
  title = '';

  @Input()
  alternate = false;

  @Output()
  buttonClick = new EventEmitter();

  clickButton() {
    this.buttonClick.emit(true);
  }
}
