import { Component, OnDestroy } from '@angular/core';
import { MessageModalService } from '../../services/message-modal/message-modal.service';

@Component({
  selector: 'message-modal-component',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.scss'],
})
export class MessageModalComponent implements OnDestroy {
  message = '';

  constructor(protected modalService: MessageModalService) {
    this.modalService.message.subscribe(value => this.message = value);
  }

  closeModal() {
    this.modalService.setMessage('');
  }

  ngOnDestroy() {
    this.modalService.message.unsubscribe();
  }
}
